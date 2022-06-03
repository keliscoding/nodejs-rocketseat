import Category from "../model/Category";

//DTO => Data transfer object, pegam o valor da rota e entregam ao repositório

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

export default class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category({
            description,
            name,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }
}
