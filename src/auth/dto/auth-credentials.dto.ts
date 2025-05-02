import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class AuthCredentialsDto {
    @ApiProperty({ description: 'Username (min 4, max 20 characters)' })
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @ApiProperty({ description: 'Password (min 8, max 20 characters, must contain uppercase, lowercase, number, special character)', example: 'string' })
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password is too weak'})
    password: string;
}