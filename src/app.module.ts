import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ClothesModule } from './clothes/clothes.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, ProductsModule, ClothesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
