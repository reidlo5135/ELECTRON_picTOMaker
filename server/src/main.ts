import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
    allowedHeaders: ['*'],
  });
  await app.listen(5000);
}
bootstrap();
