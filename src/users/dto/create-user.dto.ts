import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ type: String, example: 'cam01' })
    @IsString({ message: 'Username is not string' })
    @IsNotEmpty({ message: 'Username is not string empty' })
    username: string;

    @ApiProperty({ type: String, example: 'cam1@gmail.com' })
    @IsString({ message: 'Email is not string' })
    @IsNotEmpty({ message: 'Email is not string empty' })
    @IsEmail()
    email: string;

    @ApiProperty({ type: String, example: 'cam1' })
    @IsString({ message: 'Password is not string' })
    @IsNotEmpty({ message: 'Password is not string empty' })
    password: string;
}
