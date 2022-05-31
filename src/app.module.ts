import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClothesModule } from './clothes/clothes.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWithDbController } from './user-with-db/user-with-db.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ClothesModule,
    TodosModule,
    UserWithDbController,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
