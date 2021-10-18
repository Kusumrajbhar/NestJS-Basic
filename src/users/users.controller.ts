import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users') //to separate api tags user, product...
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {} //const usersService = new UsersService()

  @ApiOkResponse({ type: User, isArray: true, description: 'All users' }) //gives proper response with status code in swagger
  @ApiNotFoundResponse() //this will tell of 404 response to swagger if user not found
  @ApiQuery({ name: 'name', required: false }) //to make query params not required
  @Get() //get api
  getUsers(@Query('name') name: string): any {
    const user = this.usersService.findAll(name);
    if (!user) {
      throw new NotFoundException(); //throws error
    }
    return user;
  }

  @ApiOkResponse({ type: User, description: 'single user' }) //gives proper response with status code in swagger
  @ApiNotFoundResponse() //set status code
  @ApiBadRequestResponse()
  @ApiInternalServerErrorResponse()
  @Get(':id')
  getUsersById(@Param('id', ParseIntPipe) id: number): any {
    //ParseIntPipe - transforms int to str/ str to int so that we no need to typecast, as 'id' is a string we ha had to use number(id) which is resolved pya ParseIntPipe
    // auto parse Id
    const userId = this.usersService.findById(id);
    if (!userId) {
      throw new NotFoundException(); //throws error
      throw new BadRequestException(); //error of validation type
      throw new InternalServerErrorException(); //server error
    }
    return userId;
  }
  // @Get('all/:id')
  // getAllUserById(@Param('id') id: string): any {
  //   return this.usersService.findAllByMatchingId(Number(id));
  // }

  @ApiCreatedResponse({ type: User }) //gives proper response with status code in swagger
  // @ApiBadRequestResponse()
  @Post() //post api
  postNewUser(@Body() body: CreateUserDto): any {
    return this.usersService.createUser(body);
  }
}
