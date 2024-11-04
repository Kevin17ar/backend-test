import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../../users/services/users.service';
import { CreateUserBodyDto } from '../../users/dto/create-user.dto';
import { UserEntity } from '../../users/entities/user.entity';
import { FindOptionsWhere } from 'typeorm';
import { UserValidateDto } from '../dto/user-validate.dto';
import { SingInResponseDto } from '../dto/sing-in.dto';
import { UserRegisterDto } from '../dto/user-register.dto';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<UserValidateDto> {
        const whereContitions: FindOptionsWhere<UserEntity> = { email: email };
        const user = await this.usersService.findOne(whereContitions);

        if (user && bcrypt.compareSync(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async singIn(user: any): Promise<SingInResponseDto> {
        const payload = { username: user.username, email: user.email, sub: user.id, roles: user.roles };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(createUserDTo: CreateUserBodyDto): Promise<UserRegisterDto> {
        const hashedPassword = await bcrypt.hash(createUserDTo.password, 10);
        const user = await this.usersService.createUser({ ...createUserDTo, password: hashedPassword });

        return {
            userId: user.id,
            email: user.email,
            username: user.username
        }
    }
}
