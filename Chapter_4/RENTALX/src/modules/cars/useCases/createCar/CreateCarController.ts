import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {

    async handle(request: Request, response: Response): Promise<Response> {
        const createCarUseCase = container.resolve(CreateCarUseCase);

        return response.status(201).send()
    }
}

export { CreateCarController };
