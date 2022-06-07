import { RentalRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { AppError } from '../../../../shared/errors/AppError';


let createRentalRepository: RentalRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
    beforeEach(() => {
        createRentalRepository = new RentalRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(createRentalRepository);
    })

    it("should be able to create a new rental", async() => {
        
        const rental = await createRentalUseCase.execute({
            user_id: "123123",
            car_id: "121212",
            expected_return_date: new Date(),
        });
        
        expect(rental).toHaveProperty('id');
        expect(rental).toHaveProperty('start_date');
    });

     it("should not be able to create a new rental if user already have another rental open", async () => {
         expect(async () => {
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "121212",
                 expected_return_date: new Date(),
             });
    
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "454545",
                 expected_return_date: new Date(),
             });
         }).rejects.toBeInstanceOf(AppError)
     });

     it("should not be able to create a new rental if car already have another rental open", async () => {
         expect(async () => {
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "121212",
                 expected_return_date: new Date(),
             });

             await createRentalUseCase.execute({
                 user_id: "321321",
                 car_id: "121212",
                 expected_return_date: new Date(),
             });
         }).rejects.toBeInstanceOf(AppError);
     });

})