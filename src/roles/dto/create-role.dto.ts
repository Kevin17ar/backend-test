import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({
        type: String,
        example: 'ADMIN',
        description: 'RoleEntity name'
    })
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class CreateRoleResponseDto {
    @ApiProperty({
        type: Number,
        example: 1,
        description: 'RoleEntity id'
    })
    id: number;

    @ApiProperty({
        type: String,
        example: 'ADMIN',
        description: 'RoleEntity name'
    })
    name: string;
}
