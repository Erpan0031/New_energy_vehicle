import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import GlobalMiddleware from './middleware/global/globalMiddleware';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from './common/response';
import { ValidationPipe } from '@nestjs/common';
import { RolesGuard } from './roles/roles.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { HttpExceptionFilter } from './common/http-exception/filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images/uploads'), {
    prefix: '/avatar', // 虚拟地址
  });
  app.useGlobalInterceptors(new Response());
  app.use(GlobalMiddleware); // 全局中间件
  app.useGlobalFilters(new HttpExceptionFilter()); // 全局错误接口返回格式
  app.useGlobalPipes(new ValidationPipe()); // 全局管道错误验证器
  app.useGlobalGuards(new RolesGuard());
  const options = new DocumentBuilder()
    .setTitle('新能源汽车购物网后端接口文档')
    .setDescription('暂无描述信息')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  // 配置cookie中间件
  app.use(cookieParser('newEnergy'));
  app.use(
    session({
      secret: 'newEnergy',
      resave: false,
      cookie: {
        maxAge: 3600 * 24 * 60,
        httpOnly: true,
      },
      saveUninitialized: true,
      rolling: true,
    }),
  );
  await app.listen(7002);
}
bootstrap();
