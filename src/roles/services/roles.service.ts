import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RoleEntity } from '../entities/role.entity';
import { RolesSerializer } from '../serializers/roles.serializers';
import { CreateRoleDto, CreateRoleResponseDto, GetRolesDto } from '../dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly rolesRepository: Repository<RoleEntity>,
    private readonly rolesSerializer: RolesSerializer
  ) { }


  async createRole(createRoleDto: CreateRoleDto): Promise<CreateRoleResponseDto> {
    const role = await this.create(createRoleDto);
    return this.rolesSerializer.createRole(role);
  }

  async getRoles(): Promise<GetRolesDto> {
    const roles = await this.findAll();
    return this.rolesSerializer.getRoles(roles);
  }

  async create(createRoleDto: CreateRoleDto) {
    try {
      return await this.rolesRepository.save(createRoleDto);
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException(`RoleEntity already exists. ${error.detail}`);
      }
      throw error;
    }
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.rolesRepository.find();
  }
}
