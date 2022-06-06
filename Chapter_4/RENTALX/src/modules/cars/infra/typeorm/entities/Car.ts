import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cars')
export class Car {
    
    @PrimaryColumn()
    id;

    @Column()
    name;
    
    @Column()
    description;

    @Column()
    daily_rate;

    @Column()
    license_plate;

    @Column()
    fine_amount;

    @Column()
    brand;

    // @ManyToOne()
    category_id;

    @CreateDateColumn()
    created_at;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }


}
