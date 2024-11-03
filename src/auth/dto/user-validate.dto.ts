import { UserEntity } from "../../users/entities/user.entity";

export class UserValidateDto implements Omit<UserEntity, 'password'> {
    id: number;
    username: string;
    email: string;
    createdAt: Date;
    updateAt: Date;
}