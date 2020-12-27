import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { HealthController } from './health.controller';

@Module({
  imports:[
    AuthModule
  ],
  controllers: [HealthController]
})
export class HealthModule {}
