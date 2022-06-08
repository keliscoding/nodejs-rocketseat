import { inject, injectable } from "tsyringe";
import { sign, verify } from "jsonwebtoken";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import auth from "@config/auth";
import { UsersTokenRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokenRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

interface IPayload {
    sub: string;
    //vem dentro do payload
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokenRepository")
        private tokenRepository: IUsersTokenRepository,
        @inject("DateProvider")
        private dateProviderRepository: IDateProvider
    ) {}

    async execute(token: string) {

        const {
            secret_refresh_token,
            expires_in_refresh_token,
            expires_refresh_token_days,
        } = auth;

        //precisa fazer um decode da verificação
        const { email, sub } = verify(
            token,
            auth.secret_refresh_token
        ) as IPayload;
        //não mostra pra gente que há um sub dentro do decode
        //cria-se uma interface pra pega-lo
        const user_id = sub;

        const userToken = await this.tokenRepository.findByUserId(
            user_id,
            token
        );

        if (!userToken) {
            throw new AppError("Refresh Token Error!");
        }

        //quanto mais validações houverem no refresh token, melhor, por causa da segurança

        await this.tokenRepository.deleteById(userToken.id);

         const expires_date = this.dateProviderRepository.addDays(
             expires_refresh_token_days
         );

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: sub, // sub = user.id
            expiresIn: expires_in_refresh_token,
        });

        await this.tokenRepository.create({
            expires_date,
            refresh_token,
            user_id,
        });

        return refresh_token;
    }
}

export { RefreshTokenUseCase };
