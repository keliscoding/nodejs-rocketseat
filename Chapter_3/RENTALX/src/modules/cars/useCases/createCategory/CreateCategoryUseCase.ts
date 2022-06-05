import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

/*
    [x] - Definir o tipo de retorno
    [x] - Alterar o retorno de erro
    [x] - Acessar o repositório
*/


//Todo UseCase só vai ter um controller

//Service não deve conhecer o tipo de repositório, service é alto nível
//Principio de inversão de dependencia

//O service aqui foi transformado em UseCase para manter uma nomeclatura

@injectable()
class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;

    constructor(
        @inject("CategoriesRepository")
        categoriesRepository: ICategoriesRepository
    ) {
        this.categoriesRepository = categoriesRepository;
    }
    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
