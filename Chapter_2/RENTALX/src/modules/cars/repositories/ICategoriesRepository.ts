import Category from "../model/Category";

//ctrl + . implementa o quick fix

//DTO => Data transfer object, pegam o valor da rota e entregam ao repositório
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ description, name }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };