import { ApiProperty } from "@nestjs/swagger";

export class UserRegisterDto {
    @ApiProperty({
        type: Number,
        example: 1,
        description: 'Id of user'
    })
    userId: number;

    @ApiProperty({
        type: String,
        example: 'cam01',
        description: 'Username of client'
    })
    username: string;

    @ApiProperty({
        type: String,
        example: 'cam1@gmail.com',
        description: 'Email of client'
    })
    email: string;
}