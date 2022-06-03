import Category from "../../model/Category";
import { ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton => criar apenas uma instancia de uma classe, que será uma instancia global
// deve-se verificar se ela deve ser um singleton ou se ela precisa de mais de uma instancia

export default class CategoriesRepository {
    private categories: Category[];

    //singleton
    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
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

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}
