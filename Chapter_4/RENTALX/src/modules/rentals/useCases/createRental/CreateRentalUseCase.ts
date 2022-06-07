import { inject, injectable } from 'tsyringe';
import { IRentalRepository } from "@modules/rentals/repositories/IRentalRepository";
import { AppError } from '../../../../shared/errors/AppError';
import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';

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
    }: IRequest): Promise<Rental> {
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

        //O aluguel deve ter a duração minima de 24 horas

        const rental = await this.createRentalRepository.create({
            user_id,
            car_id,
            expected_return_date
        })

        return rental;
    }
}

export { CreateRentalUseCase };
