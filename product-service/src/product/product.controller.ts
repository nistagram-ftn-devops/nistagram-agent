import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put()
  async update(@Body() payload: DeepPartial<Product>) {
    return this.productService.update(payload)
  }

  @Get()
  async getAll() {
    return this.productService.findAll()
  }

  @Get(':id')
  async getByid(@Param('id') id: number) {
    return this.productService.findById(id)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id)
  }
}
