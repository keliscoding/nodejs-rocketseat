import { Repository } from "typeorm";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import ICreateUsersDTO from "@modules/dtos/ICreateUsersDTO";
import { AppDataSource } from "@src/dataSource";
import User from "../entities/User";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }

    async findUserById(id: string): Promise<User> {

        const user = await this.repository.findOne({
            where: {
                id
            }
        })
        
        return user;
    }
    
    async findByEmail(email: string): Promise<User> {
        
        const user = await this.repository.findOne({
            where: {
                email: email
            }
        })

        return user;

    }

    async create({name, email, driver_license, password, avatar, id}: ICreateUsersDTO): Promise<void> {
        
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
            avatar,
            id
        });

        await this.repository.save(user);
    }

}

export { UsersRepository }