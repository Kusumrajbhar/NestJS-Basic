import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

// @Injectable()
// export class UsersService {
//   createUser(CreateUserDto: any) {
//     throw new Error('Method not implemented.');
//   }
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}

//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }

//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
// }

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'kusum' },
    { id: 1, name: 'shraddha' },
    { id: 2, name: 'neha' },
    { id: 0, name: 'soni' },
  ];

  // findAll(): any {
  //   return this.users;
  // }

  findAll(name?: string): any {
    if (name) {
      return this.users.filter((user) => user.name == name);
    }
    return this.users;
  }

  findById(userId: number): any {
    return this.users.find((users) => users.id === userId);
  }
  // findAllByMatchingId(userId: number) {
  //   return this.users.filter((users) => users.id === userId);
  // }

  createUser(createUserDto: CreateUserDto): any {
    const newUser = { id: Date.now, ...createUserDto }; //name: createUserDto.name
    this.users.push(newUser);
    return newUser;
  }
}
