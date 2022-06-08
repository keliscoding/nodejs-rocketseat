import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import ICreateCarsDTO from "@modules/dtos/ICreateCarsDTO";
import { Car } from "../entities/Car";
import { AppDataSource } from "@src/dataSource";
import { Repository } from "typeorm";

export class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = AppDataSource.getRepository(Car);
    }

    async findAvailable(
        name?: string,
        brand?: string,
        category_id?: string
    ): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });

        if (brand) {
            carsQuery.andWhere("c.brand = :brand", { brand: brand });
        }

        if (name) {
            carsQuery.andWhere("c.name = :name", { name: name });
        }

        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", {
                category_id: category_id,
            });
        }

        const cars = await carsQuery.getMany();

        return cars;
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
        specifications,
        id,
    }: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
            specifications,
            id,
        });

        await this.repository.save(car);

        return car;
    }

    async findByPlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            where: {
                license_plate: license_plate,
            },
        });

        return car;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne({
            where: {
                id: id,
            },
        });
        return car;
    }

    async updateAvailable(id: string, available: boolean): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ available })
            .where("id = :id")
            .setParameters({ id })
            .execute()
    }
}
