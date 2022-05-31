import { Test, TestingModule } from '@nestjs/testing';
import { UserWithDbService } from './user-with-db.service';

describe('UserWithDbService', () => {
  let service: UserWithDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWithDbService],
    }).compile();

    service = module.get<UserWithDbService>(UserWithDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
