import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokenRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import auth from "@config/auth";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
    email: string;
    password: string;
}

//interface de retorno para não retornar a senha
interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
    refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
    private repository: IUsersRepository;

    constructor(
        @inject("UsersRepository")
        repository: IUsersRepository,
        @inject("UsersTokenRepository")
        private usersTokenRepository: IUsersTokenRepository,
        @inject("DateProvider")
        private dateProviderRepository: IDateProvider
    ) {
        this.repository = repository;
    }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        //verificar se usuário existe

        const user = await this.repository.findByEmail(email);

        const {
            expires_in_token,
            secret_token,
            secret_refresh_token,
            expires_in_refresh_token,
            expires_refresh_token_days,
        } = auth;

        if (!user) {
            throw new AppError("Email or password incorrect.");
        }

        //verificar se a senha está correta

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect.");
        }

        //gerar o jsonwebtoken
        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        });

        //LÓGICA DO REFRESH TOKEN
        //payload
        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date =
            this.dateProviderRepository.addDays(expires_refresh_token_days);

        await this.usersTokenRepository.create({
            //data de expiração do refresh token
            expires_date: refresh_token_expires_date,
            //metodo de gerar o refresh token, pode ser um JWT etc
            refresh_token,
            user_id: user.id,
        });

        //FIM DA LÓGICA DO REFRESH_TOKEN

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
            refresh_token
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
