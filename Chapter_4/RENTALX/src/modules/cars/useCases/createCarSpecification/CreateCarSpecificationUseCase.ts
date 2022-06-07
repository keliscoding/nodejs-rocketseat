import { injectable, inject } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    car_id: string;
    specification_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
    private repository: ICarsRepository;

    constructor(
        @inject("CarsRepository")
        repository: ICarsRepository
    ) {
        this.repository = repository;
    }

    async execute({ car_id, specification_id }: IRequest): Promise<void> {

        const carExists = await this.repository.findById(car_id);

        if (!carExists) {
            throw new AppError("Car was not found.", 400);
        }

        // await this.repository.addSpecificationToCar(specification_id)

        // const carSpecifications = [...car.specifications, specification_id]

        return null;
    }
}

export { CreateCarSpecificationUseCase };
