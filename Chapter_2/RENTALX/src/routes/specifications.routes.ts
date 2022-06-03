import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecidicationService } from '../modules/cars/services/Specifications.ts/CreateSpecidicationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

    const createSpecificationService = new CreateSpecidicationService(
        specificationsRepository
    );

    createSpecificationService.execute({name, description});

    return response.status(201).send();
})

export { specificationRoutes }