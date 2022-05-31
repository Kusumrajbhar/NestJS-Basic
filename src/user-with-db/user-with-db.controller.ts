import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserWithDbService } from './user-with-db.service';
import { CreateUserWithDbDto } from './dto/create-user-with-db.dto';
import { UpdateUserWithDbDto } from './dto/update-user-with-db.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-with-database')
@Controller('user-with-db')
export class UserWithDbController {
  constructor(private readonly userWithDbService: UserWithDbService) {}

  @Post()
  create(@Body() createUserWithDbDto: CreateUserWithDbDto) {
    return this.userWithDbService.create(createUserWithDbDto);
  }

  @Get()
  findAll() {
    return this.userWithDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWithDbService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserWithDbDto: UpdateUserWithDbDto,
  ) {
    return this.userWithDbService.update(+id, updateUserWithDbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWithDbService.remove(+id);
  }
}
