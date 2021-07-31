import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  findAll() {
    return this.productRepository.find()
  }

  async findById(id: number) {
    const product = await this.productRepository.findOne({ id })
    if (!product) throw new NotFoundException('product-not-found')
    return product
  }

  async create(payload: DeepPartial<Product>) {
    const product = new Product()
    product.name = payload.name
    product.imageUrl = payload.imageUrl
    product.price = payload.price
    product.quantity = payload.quantity

    return this.productRepository.save(product)
  }
}
