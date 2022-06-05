//O service não deve conhecer o tipo de banco de dados que estamos utilizando
//O software deve conhecer sempre a abstração e nunca a implementação

import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    private specificationRepository: ISpecificationsRepository;

    constructor(
        @inject("SpecificationsRepository")
        specificationsRepository: ISpecificationsRepository
    ) {
        this.specificationRepository = specificationsRepository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Especificação já existe!");
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
