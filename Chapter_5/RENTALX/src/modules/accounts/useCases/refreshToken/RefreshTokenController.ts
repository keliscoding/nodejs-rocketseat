import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
    async handle(request: Request, response: Response): Promise<Response> {
        //ler sobre autenticação
        const token =
            request.body.token ||
            request.headers["x-access-token"] ||
            request.query.token;

        const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

        const response_token = await refreshTokenUseCase.execute(token);

        return response.json(response_token);
    }
}

export { RefreshTokenController };
