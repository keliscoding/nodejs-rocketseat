import CategoriesRepository from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

//1. instancia o repository
const categoriesRepository = new CategoriesRepository();

//2. instancia o useCase
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

//3. instancia o controller
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
);

//4. exporta o controller

export { listCategoriesController };
