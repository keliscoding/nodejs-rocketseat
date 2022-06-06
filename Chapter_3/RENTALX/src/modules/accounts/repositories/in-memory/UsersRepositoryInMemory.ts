import User from "@modules/accounts/entities/User";
import ICreateUsersDTO from "@modules/dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[] = [];

    async create(data: ICreateUsersDTO): Promise<void> {
        const { name, password, email, driver_license } = data;

        const user = new User();

        Object.assign(user, {
            name,
            password,
            email,
            driver_license,
        });

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async findUserById(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }
}

export { UsersRepositoryInMemory };