import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signin')
    async signIn(
        @Body(ValidationPipe) authCredentialDto: AuthCredentialDto
    ): Promise<{accesstoken: string}>{
        console.log(authCredentialDto);
        return this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(){
        console.log('-----auth test-----');
        return 'OK'
    }
}
