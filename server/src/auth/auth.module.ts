import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { userProviders } from './providers/providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtStrategy } from './jwt/jwt.strategy';
// import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '15day' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...userProviders, JwtStrategy],
})
export class AuthModule {}
