import dayjs from 'dayjs';

import { RentalRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { AppError } from '../../../../shared/errors/AppError';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

let createRentalRepository: RentalRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;
let dayjsDateProvider: DayjsDateProvider;

describe("Create Rental", () => {
    const dayAdd24Hours = dayjs().add(2, "day").toDate()

    beforeEach(() => {
        createRentalRepository = new RentalRepositoryInMemory();
        dayjsDateProvider = new DayjsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(
            createRentalRepository,
            dayjsDateProvider
        );
    })

    it("should be able to create a new rental", async() => {
        
        const rental = await createRentalUseCase.execute({
            user_id: "123123",
            car_id: "121212",
            expected_return_date: dayAdd24Hours,
        });
        
        expect(rental).toHaveProperty('id');
        expect(rental).toHaveProperty('start_date');
    });

     it("should not be able to create a new rental if user already have another rental open", async () => {
         expect(async () => {
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "121212",
                 expected_return_date: dayAdd24Hours,
             });
    
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "454545",
                 expected_return_date: dayAdd24Hours,
             });
         }).rejects.toBeInstanceOf(AppError)
     });

     it("should not be able to create a new rental if car already have another rental open", async () => {
         expect(async () => {
             await createRentalUseCase.execute({
                 user_id: "123123",
                 car_id: "121212",
                 expected_return_date: dayAdd24Hours,
             });

             await createRentalUseCase.execute({
                 user_id: "321321",
                 car_id: "121212",
                 expected_return_date: dayAdd24Hours,
             });
         }).rejects.toBeInstanceOf(AppError);
     });

     it("should not be able to create a new rental with invalid return time", async () => {
         expect(async () => {
             await createRentalUseCase.execute({
                 user_id: "321321",
                 car_id: "121212",
                 expected_return_date: dayjs().toDate(),
             });
         }).rejects.toBeInstanceOf(AppError);
     });

})