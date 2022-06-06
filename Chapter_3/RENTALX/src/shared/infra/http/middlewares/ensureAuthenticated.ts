import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Dentro do header => Bearer restodotoken

    //pega o bearer token
    const authHeader = request.headers.authorization;

    //verifica se existe
    if (!authHeader) {
        throw new AppError("Token missing.", 401);
    }

    //Bearer haushuaghsuhusgaygsh => [0, 1]
    const [, token] = authHeader.split(" ");

    try {
        //pega o id do usuario no header
        const { sub: user_id } = verify(
            token,
            "4ab08336-e4e6-11ec-8fea-0242ac120002"
        );

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findUserById(user_id as string);

        if (!user) {
            throw new AppError("User does not exists.", 401);
        }

        request.user = {
            id: user.id
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
