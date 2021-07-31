import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() payload: DeepPartial<Product>) {
    return this.productService.create(payload)
  }

  @Get()
  async getAll() {
    return this.productService.findAll()
  }

  @Get(':id')
  async getByid(@Param('id') id: number) {
    return this.productService.findById(id)
  }
}
