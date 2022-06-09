//O service não deve conhecer o tipo de banco de dados que estamos utilizando
//O software deve conhecer sempre a abstração e nunca a implementação

import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

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

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Especificação já existe!");
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
