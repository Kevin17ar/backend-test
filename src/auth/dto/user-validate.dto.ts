import { RoleEntity } from "../../roles/entities/role.entity";

export class UserValidateDto {
    id: number;
    username: string;
    email: string;
    roles: RoleEntity[];
    createdAt: Date;
    updateAt: Date;
}