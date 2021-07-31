import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductModule } from 'src/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';

@Module({
  imports: [ProductModule, TypeOrmModule.forFeature([Order])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
