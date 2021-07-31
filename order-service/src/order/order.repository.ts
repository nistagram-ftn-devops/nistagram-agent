import { EntityRepository, Repository } from "typeorm";
import { Order } from "./order.entity";

@EntityRepository()
export class OrderRepository extends Repository<Order> {

}