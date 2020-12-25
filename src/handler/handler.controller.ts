import { Controller, Get, Post } from '@nestjs/common';
import { HandlerService } from './handler.service';

@Controller('handler')
export class HandlerController {

    constructor(private handlerService: HandlerService){}
    
    @Get()
    getStatus(){
        console.log("--getStatus--");
        return this.handlerService.getStatus();
    }

    @Post()
    openDoor(){
        console.log("--openDoor--");
        return this.handlerService.openDoor();
   } 
}
