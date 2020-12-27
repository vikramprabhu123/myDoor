import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('health')
export class HealthController {

    @Get('/noauth')
    getHealthNoAuth(){
        return "OK";
    }

    @Get()
    @UseGuards(AuthGuard())
    getHealth(){
        return "OK";
    }
}
