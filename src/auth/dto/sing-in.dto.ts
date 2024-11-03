import { ApiProperty } from "@nestjs/swagger";

export class SingInDto {
    @ApiProperty({
        type: String,
        example: 'cam1@gmail.com',
        description: 'Email of client'
    })
    email: string;

    @ApiProperty({
        type: String,
        example: 'cam1',
        description: 'Password of client'
    })
    password: string;
}

export class SingInResponseDto {
    @ApiProperty({
        type: String,
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjQ1NzI5OTM0LCJleHAiOjE2NDU3MjQ5MzR9.8wcVx0mY',
    })
    access_token: string
}