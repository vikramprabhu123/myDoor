import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from "./jwt-payload.interface";
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable()
export class AuthService {
    private logger = new Logger('AuthService');
    constructor(
        private jwtService: JwtService
    ){}

    async signIn(authCredentialDto: AuthCredentialDto){
        const {passcode} = authCredentialDto;
        this.logger.log('signIn');

        if (jwtConfig.authcode === passcode){
            const payload: JwtPayload = {username: 'garagedooruser'};
            const accesstoken = await this.jwtService.sign(payload);
            this.logger.log('Login Success');
            return {accesstoken};
        } else{
            this.logger.error('User Credential Invalid');
            throw new UnauthorizedException('User Credential Invalid');
        }
    }
}
