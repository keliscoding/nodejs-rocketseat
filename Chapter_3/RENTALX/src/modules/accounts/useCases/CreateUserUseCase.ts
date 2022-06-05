import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from "../repositories/IUsersRepository";
import ICreateUsersDTO from '../../dtos/ICreateUsersDTO';


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
        username,
        email,
        driver_license,
        password,
    }: ICreateUsersDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
    }
}

export { CreateUserUseCase };
