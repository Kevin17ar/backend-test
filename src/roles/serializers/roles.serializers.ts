import { Injectable } from "@nestjs/common";
import { RoleEntity } from '../entities/role.entity';
import { CreateRoleResponseDto } from "../dto/create-role.dto";
import { GetRolesDto } from "../dto";


@Injectable()
export class RolesSerializer {
    createRole(role: RoleEntity): CreateRoleResponseDto {
        return {
            id: role.id,
            name: role.name
        }
    }

    getRoles(roles: RoleEntity[]): GetRolesDto {
        return {
            count: roles.length,
            data: roles.map(role => this.createRole(role))
        }
    }
}