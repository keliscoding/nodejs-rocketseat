import { Column, Entity, ManyToOne, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Category from '@modules/cars/infra/typeorm/entities/Category';
import Specification from './Specification';

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

    @ManyToMany(() => Specification)
    @JoinTable({
        name: "specifications_cars",
        //nome da coluna pertencete a essa entidade na table pivot
        joinColumns: [{name: "car_id"}],
        //nome da coluna que tá dentro do many to many
        inverseJoinColumns: [{name: "specification_id"}]
    })
    
    specifications: Specification[];

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.available = true;
            this.created_at = new Date();
        }
    }
}
