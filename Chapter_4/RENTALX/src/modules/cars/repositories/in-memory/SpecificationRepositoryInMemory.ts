import Specification from '@modules/cars/infra/typeorm/entities/Specification';
import { ICreateSpecificationDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationRepositoryInMemory implements ISpecificationsRepository {

    specifications: Specification[] = []

    async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            description,
            name
        });

        this.specifications.push(specification);

        return specification;

    }
    
    async findByName(name: string): Promise<Specification> {
        const specification = this.specifications.find(spec => spec.name === name )
        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = this.specifications.filter(spec => ids.includes(spec.id));
        return specifications;
    }
    
}

export { SpecificationRepositoryInMemory };