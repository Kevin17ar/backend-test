import { ApiProperty } from "@nestjs/swagger";
import { CreateRoleResponseDto } from ".";

export class GetRolesDto {
    @ApiProperty({
        type: Number,
        example: 1,
        description: 'Count of roles'
    })
    count: number;

    @ApiProperty({
        type: [CreateRoleResponseDto],
        description: 'List of roles'
    })
    data: CreateRoleResponseDto[];
}

export class RoleDto {
    id: number;
    name: string;
}