import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { CreateUserBodyDto, CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async createUser(createUserBodyDto: CreateUserBodyDto) {
    const user = this.usersRepository.create({...createUserBodyDto, roles: createUserBodyDto.roles.map(role => ({ id: role }))});
    return this.create(user);
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.usersRepository.save(createUserDto);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException(`UserEntity already exists. ${error.detail}`);
      }
      throw error;
    }
  }

  async findOne(whereConditions: FindOptionsWhere<UserEntity>): Promise<UserEntity> {
    if (!whereConditions || Object.keys(whereConditions).length === 0) {
      throw new BadRequestException(`Not check with conditions. ${JSON.stringify(whereConditions)}`);
    }

    return await this.usersRepository.findOne({
      where: whereConditions,
      relations: ['roles']
    });
  }
}
