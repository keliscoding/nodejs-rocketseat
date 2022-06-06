import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import ICreateCarsDTO from "../../../dtos/ICreateCarsDTO";

@injectable()
class CreateCarUseCase {
    private createCarRepository: ICarsRepository;

    constructor(
        @inject("CarsRepository") createCarRepository: ICarsRepository
    ) {
        this.createCarRepository = createCarRepository;
    }

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<void> {}
}

export { CreateCarUseCase };
