import Category from "../infra/typeorm/entities/Category";


//ctrl + . implementa o quick fix


//DTO => Data transfer object, pegam o valor da rota e entregam ao repositório
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ description, name }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };