
//Adicionar coluna avatar na tabela de users
// Refatorar usuário com coluna avatar
//Configuração upload multer
//Criar regra de negócio do upload
//Criar controller

import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { deleteFile } from '@utils/file';




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

        if(user.avatar){
            await deleteFile(`./temp/avatar/${user.avatar}`);
        }

        user.avatar = avatar_file;

        await this.repository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
