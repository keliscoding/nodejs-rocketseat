import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

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

    // @ManyToOne()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
        this.available = true;
        this.created_at = new Date();
    }
}
