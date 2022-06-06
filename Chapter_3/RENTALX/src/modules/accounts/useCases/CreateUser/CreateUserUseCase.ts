import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import ICreateUsersDTO from "@modules/dtos/ICreateUsersDTO";
import { AppError } from "@errors/AppError";



@injectable()
class CreateUserUseCase {
    private repository: IUsersRepository;

    constructor(
        @inject("UsersRepository")
        usersRepository: IUsersRepository
    ) {
        this.repository = usersRepository;
    }

    async execute({
        name,
        email,
        driver_license,
        password,
    }: ICreateUsersDTO): Promise<void> {

        const userAlreadyExists = await this.repository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists.");
        }

        const passwordHash = await hash(password, 8);

        await this.repository.create({
            name,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
