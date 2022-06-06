import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import ICreateCarsDTO from '@modules/dtos/ICreateCarsDTO';
import { Car } from '../entities/Car';
import { AppDataSource } from '../../../../../dataSource';
import { Repository } from 'typeorm';


export class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = AppDataSource.getRepository(Car);
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        await this.repository.save(car);

        return car;
    }
    
    async findByPlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            where: {
                license_plate: license_plate
            }
        });

        return car;
    }
}