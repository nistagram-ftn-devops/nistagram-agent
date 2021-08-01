import { Order } from 'src/order/order.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @OneToMany(() => Order, (order) => order.product, { onDelete: "CASCADE" })
  orders: Order[]
}
