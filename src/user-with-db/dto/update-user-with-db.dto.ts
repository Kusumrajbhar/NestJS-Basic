import { PartialType } from '@nestjs/swagger';
import { CreateUserWithDbDto } from './create-user-with-db.dto';

export class UpdateUserWithDbDto extends PartialType(CreateUserWithDbDto) {}
