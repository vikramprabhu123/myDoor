import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayload } from "./jwt-payload.interface";
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ){}

    async signIn(authCredentialDto: AuthCredentialDto){
        const {passcode} = authCredentialDto;
        console.log(authCredentialDto);

        if (jwtConfig.authcode === passcode){
            const payload: JwtPayload = {username: 'garagedooruser'};
            const accesstoken = await this.jwtService.sign(payload);
            return {accesstoken};
        } else{
            throw new UnauthorizedException('User Credential Invalid');
        }
    }
}
