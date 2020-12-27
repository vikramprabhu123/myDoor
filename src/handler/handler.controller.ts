import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HandlerService } from './handler.service';

@Controller('handler')
export class HandlerController {

    constructor(private handlerService: HandlerService){}
    
    @Get()
    @UseGuards(AuthGuard())
    getStatus(){
        console.log("--getStatus checking--");
        return this.handlerService.getStatus();
    }

    @Post('/open')
    @UseGuards(AuthGuard())
    openDoor(){
        console.log("--openDoor--");
        return this.handlerService.openDoor();
   } 

   @Post('/close')
   @UseGuards(AuthGuard())
   closeDoor(){
       console.log("--closeDoor--");
       return this.handlerService.closeDoor();
  } 
}
