import { Repository } from 'typeorm';
import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";
import { AppDataSource } from '@src/dataSource';

class UsersTokenRepository implements IUsersTokenRepository {

    private repository: Repository<UserTokens> 

    constructor() {
        this.repository = AppDataSource.getRepository(UserTokens)
    }

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            expires_date,
            refresh_token,
            user_id
        })

        await this.repository.save(userToken);

        return userToken;
    }
    
}

export { UsersTokenRepository };