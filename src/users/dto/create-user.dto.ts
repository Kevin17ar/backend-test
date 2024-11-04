import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";
import { RoleEntity } from "src/roles/entities/role.entity";

export class CreateUserBodyDto {
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

    @ApiProperty({
        type: [Number],
        example: [1, 2],
        description: 'List of roles'
    })
    @IsArray({ message: 'Roles is not array' })
    @IsNotEmpty({ message: 'Roles is not empty' })
    roles: number[];
}

export class CreateUserDto implements Omit<UserEntity, 'id' | 'password' | 'createdAt' | 'updateAt'> {
    username: string;
    email: string;
    roles: RoleEntity[];
}