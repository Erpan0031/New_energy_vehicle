import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
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
}
