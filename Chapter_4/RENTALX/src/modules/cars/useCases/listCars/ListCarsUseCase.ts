import { inject, injectable } from "tsyringe";
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
    name?: string;
    brand?: string;
    category_id?: string;
}

@injectable()
class ListCarsUseCase {
    private repository: ICarsRepository
    
    constructor(
        @inject("CarsRepository")
        repository: ICarsRepository
    ) {
        this.repository = repository;
    }

    async execute({name, brand, category_id}: IRequest): Promise<Car[]> {
        

        const cars = await this.repository.findAvailable(
            brand,
            category_id,
            name
        );
        return cars;
    }
}

export { ListCarsUseCase };
