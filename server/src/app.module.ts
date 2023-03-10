import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UploadModule,
    AuthModule,
    UserModule,
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/newEnegry'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
