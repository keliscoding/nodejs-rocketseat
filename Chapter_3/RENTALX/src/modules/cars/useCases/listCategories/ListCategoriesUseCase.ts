import Category from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute(): Promise<Category[]> {
        return await this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };
