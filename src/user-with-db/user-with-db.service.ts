import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserWithDbDto } from './dto/create-user-with-db.dto';
import { UpdateUserWithDbDto } from './dto/update-user-with-db.dto';
import { UserWithDb } from './entities/user-with-db.entity';

@Injectable()
export class UserWithDbService {
  constructor(
    @InjectRepository(UserWithDb)
    private usersRepository: Repository<UserWithDb>,
  ) {}

  async create(data: CreateUserWithDbDto) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
  }

  findAll = async () => {
    try {
      return await this.usersRepository.find();
    } catch (err) {
      throw err;
    }
  };

  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<CreateUserWithDbDto>) {
    await this.usersRepository.update({ id }, data);
    return await this.usersRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
}
