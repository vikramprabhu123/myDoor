import { Module } from '@nestjs/common';
import { HandlerModule } from './handler/handler.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/dist'),
    }),
    HandlerModule,
    HealthModule,
    AuthModule
  ],
})
export class AppModule {}
