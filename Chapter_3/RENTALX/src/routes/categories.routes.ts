import { Router } from "express";
import multer from "multer";

import {} from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

const importCategoryController = new ImportCategoryController();

const listCategoriesController = new ListCategoriesController();
/*
    pegar os arquivos do upload, salvar dentro de uma pasta temporária, fazer toda leitura e tudo que precisar, tipo 
    salvar no banco de dados, e ai fazer a deleção dentro da pasta temporária

*/
const upload = multer({
    dest: "./temp",
});

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

// no imsonia, tem que colocar "multipart form" pra fazer o upload

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
