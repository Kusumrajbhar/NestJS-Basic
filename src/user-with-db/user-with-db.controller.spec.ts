import { Test, TestingModule } from '@nestjs/testing';
import { UserWithDbController } from './user-with-db.controller';
import { UserWithDbService } from './user-with-db.service';

describe('UserWithDbController', () => {
  let controller: UserWithDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWithDbController],
      providers: [UserWithDbService],
    }).compile();

    controller = module.get<UserWithDbController>(UserWithDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
