import { inject, injectable } from "tsyringe";

import { IRentalRepository } from "@modules/rentals/repositories/IRentalRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";



@injectable()
class ListRentalsByUserUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepository
    ) {}

    async execute(user_id: string): Promise<Rental[]> {
        const rentalsByUser = await this.rentalsRepository.findByUserId(user_id);

        return rentalsByUser;
    }
}

export { ListRentalsByUserUseCase };
