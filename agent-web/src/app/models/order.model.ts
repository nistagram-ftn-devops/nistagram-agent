import { Product } from "./product.model"

export class Order {
    id: number
    buyerName: string
    buyerAddress: string
    product: Product
}