import { injectable, inject } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from '../../../../shared/errors/AppError';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

interface IRequest {
    car_id: string;
    specification_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
    private repository: ICarsRepository;
    private specRepository: ISpecificationsRepository;


    constructor(
        @inject("CarsRepository")
        repository: ICarsRepository,
        specRepository: ISpecificationsRepository
    ) {
        this.repository = repository;
        this.specRepository = specRepository;
    }

    async execute({ car_id, specification_id }: IRequest): Promise<void> {
        const carExists = await this.repository.findById(car_id);

        if (!carExists) {
            throw new AppError("Car was not found.", 400);
        }

        const specifications = await this.specRepository.findByIds(specification_id);

        carExists.specifications = specifications;

        await this.repository.create(carExists);

        return null;
    }
}

export { CreateCarSpecificationUseCase };
