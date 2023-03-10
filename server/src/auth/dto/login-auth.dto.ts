import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    description: '邮箱账号',
    example: 'xxx@gmail.com',
  })
  email: string;
  @ApiProperty({
    description: '账户密码',
    example: '',
  })
  password: string;
  @ApiProperty({
    description: '账号是否15天免登录',
    example: 'true/false',
  })
  rememberme: boolean;
}
