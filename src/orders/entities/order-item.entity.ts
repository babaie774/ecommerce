import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity'; // فرض بر این است که یک Entity برای محصولات وجود دارد
import { Order } from './order.entity'; // فرض بر این است که Entity Order قبلاً ایجاد شده است

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;
}
