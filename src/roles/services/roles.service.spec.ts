import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { RolesService } from './roles.service';
import { RoleEntity } from '../entities/role.entity';
import { RolesSerializer } from '../serializers/roles.serializers';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        RolesSerializer,
        {
          provide: getRepositoryToken(RoleEntity),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
