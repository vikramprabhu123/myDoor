import { Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HandlerService } from './handler.service';

@Controller('handler')
export class HandlerController {

    private logger = new Logger('HandlerController');
    constructor(private handlerService: HandlerService){}
    
    @Get()
    @UseGuards(AuthGuard())
    getStatus(){
        this.logger.log('getStatus');
        return this.handlerService.getStatus();
    }

    @Post('/open')
    @UseGuards(AuthGuard())
    openDoor(){
        this.logger.log('openDoor');
        return this.handlerService.openDoor();
   } 

   @Post('/close')
   @UseGuards(AuthGuard())
   closeDoor(){
    this.logger.log('closeDoor');
    return this.handlerService.closeDoor();
  } 
}
