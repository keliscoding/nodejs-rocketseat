import { Router } from "express";
import CategoriesRepository from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import {  } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";
import multer from "multer";

import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

/*
    pegar os arquivos do upload, salvar dentro de uma pasta temporária, fazer toda leitura e tudo que precisar, tipo 
    salvar no banco de dados, e ai fazer a deleção dentro da pasta temporária

*/
const upload = multer({
    dest: "./temp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

// no imsonia, tem que colocar "multipart form" pra fazer o upload

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})



export { categoriesRoutes };
