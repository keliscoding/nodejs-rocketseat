import { container } from "tsyringe";

import "@shared/container/providers/"

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import CategoriesRepository from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { IRentalRepository } from '@modules/rentals/repositories/IRentalRepository';
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";


// ICategoriesRepository =>
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", //nome do container
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", //nome do container
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository", //nome do container
    UsersRepository //qual a classe
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    CarsImagesRepository
);

container.registerSingleton<IRentalRepository>(
    "RentalsRepository",
    RentalsRepository
);
