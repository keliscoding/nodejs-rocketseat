import { IUsersRepository } from '../IUsersRepository';
import ICreateUsersDTO from '../../../dtos/ICreateUsersDTO';
import { Repository } from 'typeorm';
import User from '../../entities/User';
import { AppDataSource } from '../../../../dataSource';


class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }
    
    async findByEmail(email: string): Promise<User> {
        
        const user = await this.repository.findOne({
            where: {
                email: email
            }
        })

        return user;

    }

    async create({name, email, driver_license, password}: ICreateUsersDTO): Promise<void> {
        
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
        });

        await this.repository.save(user);
    }

}

export { UsersRepository }