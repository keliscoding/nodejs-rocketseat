import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Category from '@modules/cars/infra/typeorm/entities/Category';

@Entity("cars")
export class Car {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    daily_rate: number;

    @Column()
    license_plate: string;

    @Column()
    available: boolean;

    @Column()
    fine_amount: number;

    @Column()
    brand: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.available = true;
            this.created_at = new Date();
        }
    }
}
