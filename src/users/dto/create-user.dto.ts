import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric() //vAlidation
  @MaxLength(7) //validation
  @ApiProperty({ required: false })
  age: number;
}
