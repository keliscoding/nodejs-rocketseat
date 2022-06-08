import ICreateCarsDTO from '../../dtos/ICreateCarsDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>;
    findByPlate(license_plate: string): Promise<Car>;
    findAvailable(name?: string, brand?: string, category_id?: string): Promise<Car[]>;
    findById(id: string): Promise<Car>;
}

export { ICarsRepository }