import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";

//todas as instancias serão feitas aqui

export default () => {
    const categoriesRepository = new CategoriesRepository();

    const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRepository
    );

    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase
    );

    return createCategoryController;
};
