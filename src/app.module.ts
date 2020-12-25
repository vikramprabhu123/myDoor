import { Module } from '@nestjs/common';
import { HandlerModule } from './handler/handler.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    HandlerModule
  ],
})
export class AppModule {}
