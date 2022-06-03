import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from "./CreateCategoryController";

//todas as instancias serão feitas aqui

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController }