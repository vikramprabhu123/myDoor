import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const port = 3000;
  logger.log(`Application started at port: "${port}"`)
  await app.listen(port);
}
bootstrap();
