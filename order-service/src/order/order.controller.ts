import { Body, Controller, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    async create(@Body() payload: DeepPartial<Order>) {
        return this.orderService.create(payload)
    }
}
