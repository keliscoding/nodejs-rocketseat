import { Repository } from "typeorm";

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
        const rental = await this.repository.findOne({
            where: {
                car_id: car_id,
            },
        });
        return rental;
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const rental = await this.repository.findOne({
            where: {
                user_id: user_id,
            },
        });
        return rental;
    }
    async create({
        car_id,
        user_id,
        expected_return_date,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            car_id,
            user_id,
            expected_return_date,
        });

        await this.repository.save(rental);

        return rental;
    }
}

export { RentalsRepository };
