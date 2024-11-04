import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './controllers/roles.controller';
import { RolesSerializer } from './serializers/roles.serializers';
import { RoleEntity } from './entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
  ],
  controllers: [RolesController],
  providers: [RolesService, RolesSerializer],
})
export class RolesModule { }
