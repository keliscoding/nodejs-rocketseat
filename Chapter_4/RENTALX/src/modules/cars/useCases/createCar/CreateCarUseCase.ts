import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import ICreateCarsDTO from "../../../dtos/ICreateCarsDTO";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@injectable()
class CreateCarUseCase {
    private carRepository: ICarsRepository;

    constructor(@inject("CarsRepository") carRepository: ICarsRepository) {
        this.carRepository = carRepository;
    }

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<Car> {
        const carAlreadyExists = await this.carRepository.findByPlate(
            license_plate
        );

        if (carAlreadyExists) {
            throw new AppError("License plate already exists", 400);
        }

        const car = await this.carRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        return car;
    }
}

export { CreateCarUseCase };
