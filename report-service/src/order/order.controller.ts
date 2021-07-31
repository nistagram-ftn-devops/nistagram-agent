import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Get('most-selling')
    async getMostSellingProducts() {
        return this.orderService.getMostSellingProducts()
    }

    @Get('most-valuable')
    async getMostValueableProducts() {
        return this.orderService.getMostValueableProducts()
    }
}
