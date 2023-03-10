import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { encryptPassword, makeSalt } from 'src/utils/cryptogram.util';
import * as moment from 'moment';
import { randomUUID } from 'crypto';
@Injectable()
export class AuthService {
  jwtService: any;
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {}
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
  async certificate(user: User) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);
    return token;
  }
  // 登录用户
  async login(loginAuthDto: LoginAuthDto) {
    const { email, password } = loginAuthDto;
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      throw new NotFoundException('用户不存在');
    }
    const { password: dbPassword, salt } = user;
    const currentHashPassword = encryptPassword(password, salt);
    if (currentHashPassword !== dbPassword) {
      throw new NotFoundException('密码错误');
    }
    const token = await this.certificate(user);
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
