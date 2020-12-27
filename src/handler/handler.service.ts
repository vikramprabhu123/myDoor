import { Injectable } from '@nestjs/common';
import { MyQHandler } from './myq/myqhandler.myq';

@Injectable()
export class HandlerService {
    constructor(private myQHandler: MyQHandler){}
    async getStatus(){
        return this.myQHandler.getStatus();
    }

    async openDoor(){
        return this.myQHandler.openDoor();
    }

    async closeDoor(){
        return this.myQHandler.closeDoor();
    }

}
