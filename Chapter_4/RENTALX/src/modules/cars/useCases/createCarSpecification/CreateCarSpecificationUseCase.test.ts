import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";

let carRepository: ICarsRepository;
let specificationsRepository: ISpecificationsRepository;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create car specification", () => {
    beforeEach(() => {
        carRepository = new CarsRepositoryInMemory();
        specificationsRepository = new SpecificationRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carRepository,
            specificationsRepository
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

        const spec1 = await specificationsRepository.create({
            name: "spec_test_1",
            description: "spec_test_1_desc"
        })

        const spec2 = await specificationsRepository.create({
            name: "spec_test_2",
            description: "spec_test_2_desc",
        });
        
        const specifications_ids = [spec1.id, spec2.id];

        const specifications = await createCarSpecificationUseCase.execute({
            car_id: car.id,
            specifications_id: specifications_ids,
        });

        expect(specifications).toHaveProperty("specifications");
        expect(specifications.specifications.length).toBe(2);
    });

    it("should not be able to add a new specification to a non-existent car", async () => {
        expect(async () => {
            const car_id = "1234";
            const specifications_id = ["54321"];

            await createCarSpecificationUseCase.execute({
                car_id,
                specifications_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
