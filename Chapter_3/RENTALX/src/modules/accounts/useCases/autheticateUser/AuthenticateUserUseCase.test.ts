import { AppError } from "@errors/AppError";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import ICreateUsersDTO from "@modules/dtos/ICreateUsersDTO";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;


describe("Authenticate User", () =>{
    
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    
    it("Should be able to create authorization token", async () => {
        const user: ICreateUsersDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        }
        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");
    });

    it("Should not be able to authenticate non-existent user", async () => {
        expect(async() => {
             await authenticateUserUseCase.execute({
                email: 'false@gmail.com',
                password: '1234',
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authenticate with incorrect password", async () => {
        expect(async () => {

            const user: ICreateUsersDTO = {
                driver_license: "000123",
                email: "user@test.com",
                password: "1234",
                name: "User Test Error",
            };
            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: "user@test.com",
                password: "0000",
            });
        }).rejects.toBeInstanceOf(AppError);
    });


});