import ICreateUsersDTO from "@modules/dtos/ICreateUsersDTO";
import User from "../infra/typeorm/entities/User";



interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findUserById(id: string): Promise<User>;
}

export { IUsersRepository }