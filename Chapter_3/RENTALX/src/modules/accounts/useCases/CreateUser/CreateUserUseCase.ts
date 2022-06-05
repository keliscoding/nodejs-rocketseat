import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import ICreateUsersDTO from "../../../dtos/ICreateUsersDTO";
import { AppError } from '../../../../errors/AppError';

@injectable()
class CreateUserUseCase {
    private usersRepository: IUsersRepository;

    constructor(
        @inject("UsersRepository")
        usersRepository: IUsersRepository
    ) {
        this.usersRepository = usersRepository;
    }

    async execute({
        name,
        email,
        driver_license,
        password,
    }: ICreateUsersDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists.");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
