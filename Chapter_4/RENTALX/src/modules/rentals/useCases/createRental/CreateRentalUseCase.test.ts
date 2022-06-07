import { RentalRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";


let createRentalRepository: RentalRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
    beforeEach(() => {
        createRentalRepository = new RentalRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(createRentalRepository);
    })

    it("should be able to create a new rental", async() => {
        
        await createRentalUseCase.execute({
            user_id: "123123",
            car_id: "121212",
            expected_return_date: new Date(),
        });
        
    })

})