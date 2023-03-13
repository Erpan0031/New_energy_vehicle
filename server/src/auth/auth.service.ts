import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram.util';
import * as moment from 'moment';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL') private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  // 校验注册信息
  async checkRegisterForm(createAuthDto: CreateAuthDto) {
    const findUser = await this.userModel.findOne({
      email: createAuthDto.email,
    });
    if (findUser) throw new NotFoundException('用户已存在');
  }

  // 创建用户
  async create(createAuthDto: CreateAuthDto) {
    await this.checkRegisterForm(createAuthDto); // 验证用户是否存在
    const { email, password } = createAuthDto;
    const salt = makeSalt(); // 制作密码盐
    const hashPassword = encryptPassword(password, salt);
    const createTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const name = '用户' + randomUUID();
    const storageUser = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      createTime: createTime,
      updateTime: createTime,
      userRights: 0,
      salt,
    });
    return {
      id: storageUser._id,
      name,
      email,
      createTime,
      updateTime: createTime,
    };
  }
  async certificate(user: User, expirationTime: string) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = this.jwtService.sign(payload, { expiresIn: expirationTime });
    return token;
  }
  // 登录用户
  async login(loginAuthDto: LoginAuthDto) {
    const { email, password, rememberme } = loginAuthDto;
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new NotFoundException({
        message: '用户不存在',
        Code: 101,
      });
    }
    const { password: dbPassword, salt } = user;
    const currentHashPassword = encryptPassword(password, salt);
    if (currentHashPassword !== dbPassword) {
      throw new NotFoundException('密码错误');
    }
    const expiresIn = rememberme ? '15d' : '1h';
    console.log(
      '🚀 ~ file: auth.service.ts:75 ~ AuthService ~ login ~ expiresIn:',
      expiresIn,
    );
    const token = await this.certificate(user, expiresIn);

    return {
      access_token: token,
    };
  }
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  findAll() {
    return `This action returns all auth`;
  }

  async getuserinfo(userinfo: User) {
    const user = await this.userModel.findOne({ _id: userinfo.id });
    return {
      name: user.name,
      email: user.email,
      createTime: user.createTime,
      updateTime: user.updateTime,
      avatarUrl: 
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
  }
  // 查询用户
  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }
  // 更新用户
  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }
  // 删除用户
  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
