import { Body, Controller, Post } from '@nestjs/common';
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
}
