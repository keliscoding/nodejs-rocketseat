import { ICategoriesRepository } from '../../repositories/ICategories.Repository';

interface IRequest {
    name: string;
    description: string;
}

/*
    [x] - Definir o tipo de retorno
    [x] - Alterar o retorno de erro
    [x] - Acessar o repositório
*/


//Service não deve conhecer o tipo de repositório, service é alto nível
//Principio de inversão de dependencia
//
class CreateCategoryService {
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

export { CreateCategoryService };
