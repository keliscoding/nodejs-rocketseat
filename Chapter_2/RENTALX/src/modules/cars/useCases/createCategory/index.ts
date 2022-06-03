import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import CategoriesRepository from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from "./CreateCategoryController";

//todas as instancias serão feitas aqui

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController }