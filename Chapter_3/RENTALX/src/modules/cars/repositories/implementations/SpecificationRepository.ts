import { Repository } from "typeorm";

import Specification from "@modules/cars/entities/Specification";
import { AppDataSource } from "dataSource";
import { ISpecificationsRepository } from "../ISpecificationsRepository";



export class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = AppDataSource.getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            where: {
                name: name,
            },
        });
        return specification;
    }
}
