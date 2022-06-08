import { Rental } from "../infra/typeorm/entities/Rental";

export interface ICreateRentalDTO {
    car_id: string;
    user_id: string;
    expected_return_date: Date;
    id?: string;
    end_date?: Date;
    total?: number;
}

interface IRentalRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
    create({
        car_id,
        user_id,
        expected_return_date,
        total
    }: ICreateRentalDTO): Promise<Rental>;
    findById(id: string): Promise<Rental>;
}

export { IRentalRepository };
