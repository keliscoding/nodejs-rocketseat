import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "../../../../shared/errors/AppError";

let carRepository: ICarsRepository;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create car specification", () => {
    beforeEach(() => {
        carRepository = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carRepository
        );
    });

    it("should be able to add a new specification to the car", async () => {
        const car = await carRepository.create({
            name: "car",
            description: "car",
            daily_rate: 100,
            license_plate: "abc-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });
        
        const specification_id = ["54321"];

        await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specification_id,
        });
    });

    it("should not be able to add a new specification to a non-existent car", async () => {
        expect(async () => {
            const car_id = "1234";
            const specification_id = ["54321"];

            await createCarSpecificationUseCase.execute({
                car_id,
                specification_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
