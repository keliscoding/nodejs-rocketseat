import { inject, injectable } from 'tsyringe';
import { IRentalRepository } from "@modules/rentals/repositories/IRentalRepository";
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {

    constructor(@inject("RentalRepository")
        private createRentalRepository: IRentalRepository
    ) {}

    async execute({
        user_id,
        car_id,
        expected_return_date
    }: IRequest): Promise<void> {
        //Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo carro
        const carUnavailable = await this.createRentalRepository.findOpenRentalByCar(car_id);

        if(carUnavailable) {
            throw new AppError("Car is unavailable.");
        }

        //Não deve ser possível cadastrar um novo aluguel caso já exista umem aberto para o mesmo usuário

        const rentalOpenttoUser = await this.createRentalRepository.findOpenRentalByUser(user_id);

        if(rentalOpenttoUser){
            throw new AppError("There's a rental in progress for user.")
        }
        
    }
}

export { CreateRentalUseCase };
