import { IsNull, Repository } from "typeorm";

import {
    ICreateRentalDTO,
    IRentalRepository,
} from "@modules/rentals/repositories/IRentalRepository";
import { Rental } from "../entities/Rental";
import { AppDataSource } from "@src/dataSource";

class RentalsRepository implements IRentalRepository {
    private repository: Repository<Rental>;

    constructor() {
        this.repository = AppDataSource.getRepository(Rental);
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const rental = await this.repository.findOneBy({
            car_id: car_id,
            end_date: IsNull(),
        });
        
        return rental;
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const rental = await this.repository.findOneBy({
            
                user_id: user_id,
                end_date: IsNull(),
            },
        );
        return rental;
    }
    async create({
        car_id,
        user_id,
        expected_return_date,
        id,
        end_date,
        total,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            car_id,
            user_id,
            expected_return_date,
            id,
            end_date,
            total,
        });

        await this.repository.save(rental);

        return rental;
    }

    async findById(id: string): Promise<Rental> {
        const rental = await this.repository.findOneBy({
            id
        });

        return rental;
    }

    async findByUserId(id: string): Promise<Rental[]> {
        
        const rentals = await this.repository.findBy({
            user_id: id
        });

        return rentals;
    }
}

export { RentalsRepository };
