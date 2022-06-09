import { inject, injectable } from "tsyringe";
import { v4 as uuid } from 'uuid';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokenRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

interface IRequest {}

@injectable()
class SendForgotPasswordMailUseCase {
    
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository,
        @inject("UsersTokenRepository")
        private usersTokensRepository: IUsersTokenRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,
        @inject("MailProvider")
        private mailProvider: IMailProvider
        ) {}

    async execute(email: string): Promise<void> {
        
        const user = await this.userRepository.findByEmail(email);

        if(!user) {
            throw new AppError("User does not exists.")
        }


        //cria um token com uuid pra ter uma url menor
        const token = uuid();


        const expires_date = this.dateProvider.addHours(3);

        //com o token a gente cria nossa referência dentro da tabela no banco
        await this.usersTokensRepository.create(
            {
                refresh_token: token,
                user_id: user.id,
                expires_date 
            }
        )

        await this.mailProvider.sendMail(email, "Recuperação de Senha", `O link para o reset é ${token}`);

    }
}

export { SendForgotPasswordMailUseCase };
