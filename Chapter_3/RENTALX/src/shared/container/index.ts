import { container } from "tsyringe";

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import CategoriesRepository from '../../modules/cars/repositories/implementations/CategoriesRepository';

import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';

// ICategoriesRepository =>  
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //nome do container
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", //nome do container
    SpecificationsRepository
);