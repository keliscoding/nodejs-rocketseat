import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

class ListAvailableCarsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAvailableCarsUseCase = container.resolve(ListAvailableCarsUseCase);

        const { name, brand, category_id } = request.query;
        
        const cars = await listAvailableCarsUseCase.execute({
            brand: brand as string,
            category_id: category_id as string,
            name: name as string,
        });

        return response.json(cars);
    }
}

export { ListAvailableCarsController };
