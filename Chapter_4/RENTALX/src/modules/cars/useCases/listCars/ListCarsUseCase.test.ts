import { ListCarsUseCase } from "./ListCarsUseCase";
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';


let listCarsUseCase: ListCarsUseCase;
let carsRepository: CarsRepositoryInMemory;


describe('List Cars', () => {

    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepository);

        carsRepository.create({
            name: "car1",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "car1",
            category_id: "category",
        });

        carsRepository.create({
            name: "car2",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "car2",
            category_id: "category",
        });

        carsRepository.create({
            name: "car3",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "car3",
            category_id: "category",
        });
    })

    it.skip("should be able to list all available cars", async () => {
        const cars = await listCarsUseCase.execute({});

        expect(cars).toHaveLength(3);
    })

    it("should be able to list all available cars by name", async () => {
        const cars = await listCarsUseCase.execute({ brand: 'car1'});

        expect(cars).toHaveLength(1);
    });
});