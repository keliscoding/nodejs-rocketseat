
//Adicionar coluna avatar na tabela de users
// Refatorar usuário com coluna avatar
//Configuração upload multer
//Criar regra de negócio do upload
//Criar controller

import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from "../../repositories/IUsersRepository";



interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    private repository: IUsersRepository;

    constructor(
        @inject("UsersRepository")
        repository: IUsersRepository
    ) {
        this.repository = repository;
    }

    async execute({ avatar_file, user_id }: IRequest) {
        const user = await this.repository.findUserById(user_id);

        user.avatar = avatar_file;

        await this.repository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
