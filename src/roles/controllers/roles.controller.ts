import { Controller, Get, Post, Body } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { GlobalSwagger } from '../../common/decorators/global-swagger.decorator';
import { CreateRoleDto, CreateRoleResponseDto, GetRolesDto } from '../dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @GlobalSwagger(
    'Create Role',
    'This service create a new role',
    CreateRoleResponseDto,
    201
  )
  @Post()
  create(@Body() createRoleDto: CreateRoleDto): Promise<CreateRoleResponseDto> {
    return this.rolesService.createRole(createRoleDto);
  }

  @GlobalSwagger(
    'Get All Roles',
    'This service get all roles',
    GetRolesDto
  )
  @Get()
  findAll(): Promise<GetRolesDto> {
    return this.rolesService.getRoles();
  }
}
