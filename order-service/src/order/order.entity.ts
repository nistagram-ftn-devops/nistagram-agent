import { Product } from "src/product/product.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    buyerName: string

    @Column()
    buyerAddress: string

    @ManyToOne(() => Product, (product) => product.orders, { onDelete: "CASCADE" })
    product: Product
}