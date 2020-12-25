import { Module } from '@nestjs/common';
import { HandlerController } from './handler.controller';
import { HandlerService } from './handler.service';
import { MyQHandler } from './myq/myqhandler.myq';

@Module({
  controllers: [HandlerController],
  providers: [HandlerService, MyQHandler]
})
export class HandlerModule {}
