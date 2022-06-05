import { container } from "tsyringe";

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import CategoriesRepository from '../../modules/cars/repositories/implementations/CategoriesRepository';

import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

// ICategoriesRepository =>  
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //nome do container
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", //nome do container
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", //nome do container
    UsersRepository //qual a classe
);