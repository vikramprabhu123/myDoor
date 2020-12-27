import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class AuthCredentialDto{
    @IsNotEmpty()
    // @IsNumber()
    @MinLength(8)
    passcode: number;
}