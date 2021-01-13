import { Injectable, Logger } from '@nestjs/common';
import { MyQHandler } from './myq/myqhandler.myq';


@Injectable()
export class HandlerService {
    private logger = new Logger('HandlerService');
    constructor(private myQHandler: MyQHandler){}
    async getStatus(){
        this.logger.log('getStatus');
        return this.myQHandler.getStatus();
    }

    async openDoor(){
        this.logger.log('openDoor');
        return this.myQHandler.openDoor();
    }

    async closeDoor(){
        this.logger.log('closeDoor');
        return this.myQHandler.closeDoor();
    }

}
