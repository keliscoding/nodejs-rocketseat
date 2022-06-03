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
class CreateCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({description, name}: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error('Category already exists!')
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
