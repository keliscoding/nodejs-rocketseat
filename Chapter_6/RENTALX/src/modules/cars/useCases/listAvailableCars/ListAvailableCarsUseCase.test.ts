import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';


let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepository: CarsRepositoryInMemory;


describe('List Cars', () => {

    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory()
        listCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
    })

    it("should be able to list all available cars", async () => {
        await carsRepository.create({
            name: "car1",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "car1_test",
            category_id: "category",
        });
        
        const cars = await listCarsUseCase.execute({});
        expect(cars).toHaveLength(1);
    })

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepository.create({
            name: "car2",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "brand_test",
            category_id: "category",
        });
        const cars = await listCarsUseCase.execute({ brand: "brand_test" });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepository.create({
            name: "car_test",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "brand_test",
            category_id: "category_test",
        });
        const cars = await listCarsUseCase.execute({ category_id: "category_test" });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepository.create({
            name: "car3",
            description: "description",
            daily_rate: 140.0,
            license_plate: "ABCD-5648",
            fine_amount: 100.0,
            brand: "brand_test",
            category_id: "category",
        });
        const cars = await listCarsUseCase.execute({
            brand: "brand_test",
        });

        expect(cars).toEqual([car]);
    });
});