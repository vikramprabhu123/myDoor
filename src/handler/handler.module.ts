import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { HandlerController } from './handler.controller';
import { HandlerService } from './handler.service';
import { MyQHandler } from './myq/myqhandler.myq';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [HandlerController],
  providers: [HandlerService, MyQHandler]
})
export class HandlerModule {}
