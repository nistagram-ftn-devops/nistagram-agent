import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { DeepPartial } from 'typeorm';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderRepository) private orderRepository: OrderRepository, 
        private productService: ProductService    
    ) {}

    async create(@Body() payload: DeepPartial<Order>) {
        const order = new Order()
        order.buyerAddress = payload.buyerAddress
        order.buyerName = payload.buyerName
        const product = await this.productService.findById(payload.product.id)

        if (product.quantity <= 0) throw new BadRequestException('zero-quantity')

        await this.productService.reduceQuantity(product.id)
        order.product = product

        return this.orderRepository.save(order)
    }

    async getMostSellingProducts() {
        return await this.orderRepository.createQueryBuilder('order')
            .leftJoinAndSelect('order.product', 'product')
            .orderBy('product.id')
            .getMany()
    }

    async getMostValueableProducts() {
        return await this.orderRepository.createQueryBuilder('order')
            .leftJoinAndSelect('order.product', 'product')
            .orderBy('product.id')
            .getMany()
    }
}
