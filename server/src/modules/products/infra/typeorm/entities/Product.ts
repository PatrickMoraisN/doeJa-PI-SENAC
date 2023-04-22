import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('products')
class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('varchar', { array: true })
  labels: string[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
