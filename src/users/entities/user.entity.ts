// import { ApiProperty } from '@nestjs/swagger';

// export class User {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   name: string;
// }

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
