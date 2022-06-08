import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';

class RefreshTokenController {
    
    async handle(request: Request, response: Response): Promise<Response> {
        

        const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

        return response.send()
    }
}

export { RefreshTokenController };
