import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
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
    
    return this.usersRepository.findOne({where: whereConditions});
  }

  async save(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.save(createUserDto);
  }

}
