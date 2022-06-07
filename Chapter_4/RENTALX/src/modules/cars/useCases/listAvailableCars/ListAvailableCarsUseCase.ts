import { inject, injectable } from "tsyringe";
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
    private repository: ICarsRepository;

    constructor(
        @inject("CarsRepository")
        repository: ICarsRepository
    ) {
        this.repository = repository;
    }

    async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {

        const cars = await this.repository.findAvailable(
            name,
            brand,
            category_id,
        );

        return cars;
    }
}

export { ListAvailableCarsUseCase };
