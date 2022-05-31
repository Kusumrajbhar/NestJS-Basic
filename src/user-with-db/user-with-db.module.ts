import { Module } from '@nestjs/common';
import { UserWithDbService } from './user-with-db.service';
import { UserWithDbController } from './user-with-db.controller';
import { UserWithDb } from './entities/user-with-db.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserWithDb])],
  controllers: [UserWithDbController],
  providers: [UserWithDbService],
})
export class UserWithDbModule {}
