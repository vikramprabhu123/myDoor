import { Body, Controller, Logger, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    private logger = new Logger('AuthController');
    constructor(
        private authService: AuthService
    ){}

    @Post('/signin')
    async signIn(
        @Body(ValidationPipe) authCredentialDto: AuthCredentialDto
    ): Promise<{accesstoken: string}>{
        this.logger.log(`signIn`);
        return this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(){
        this.logger.log(`test`);
        return 'OK'
    }
}
