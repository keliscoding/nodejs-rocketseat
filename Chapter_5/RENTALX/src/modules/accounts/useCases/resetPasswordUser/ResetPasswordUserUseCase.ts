import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { IUsersTokenRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';


interface IRequest {
    token: string;
    password: string;

}

@injectable()
class ResetPasswordUserUseCase {

    constructor(
        @inject("UsersTokenRepository")
        private usersTokenRepository: IUsersTokenRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({token, password}: IRequest): Promise<void>{
        //verificar se o token existe dentro da tabela Users Token

        const userToken = await this.usersTokenRepository.findByRefreshToken(token);

        if(!userToken) {
            throw new AppError("Invalid Token");
        }

        const today_date = this.dateProvider.dateNow();

        const token_expires_date = userToken.expires_date;

        if (this.dateProvider.compareIfBefore(token_expires_date, today_date)) {
            throw new AppError("Token expired!");
        }

        //acha o usuário
        const user = await this.userRepository.findUserById(userToken.user_id);

        //adiciona a nova senha encriptada
        user.password = await hash(password, 8);

        //salva o usuário modificado
        await this.userRepository.create(user);

        //remove o token utilizado do banco pra segurança
        await this.usersTokenRepository.deleteById(userToken.id)
        
    }
}

export { ResetPasswordUserUseCase };
