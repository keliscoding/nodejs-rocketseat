import { Repository } from "typeorm";
import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";
import { AppDataSource } from "@src/dataSource";

class UsersTokenRepository implements IUsersTokenRepository {
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = AppDataSource.getRepository(UserTokens);
    }

    async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
        const usersToken = await this.repository.findOneBy({refresh_token});
        return usersToken;
    }
    

    async findByUserIdAndRefreshToken(
        user_id: string,
        refresh_token: string
        ): Promise<UserTokens> {
            const token = await this.repository.findOneBy({
                user_id,
                refresh_token,
            });
            
            return token;
        }
        
        async create({
            expires_date,
            refresh_token,
            user_id,
        }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.repository.create({
            expires_date,
            refresh_token,
            user_id,
        });
        
        await this.repository.save(userToken);
        
        return userToken;
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { UsersTokenRepository };
