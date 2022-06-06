import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


import { AppError } from "@errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";


interface IRequest {
    email: string;
    password: string;
}

//interface de retorno para não retornar a senha
interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    private repository: IUsersRepository;

    constructor(
        @inject("UsersRepository")
        repository: IUsersRepository
    ) {
        this.repository = repository;
    }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        //verificar se usuário existe

        const user = await this.repository.findByEmail(email);

        if(!user) {
            throw new AppError("Email or password incorrect.");
        }

        //verificar se a senha está correta

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect.");
        }

        //gerar o jsonwebtoken
        const token = sign({}, "4ab08336-e4e6-11ec-8fea-0242ac120002", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
