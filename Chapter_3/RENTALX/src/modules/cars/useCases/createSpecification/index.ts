import { SpecificationsRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

export default () => {

    const specificationRepository = new SpecificationsRepository();
    
    const createSpecificationUseCase = new CreateSpecificationUseCase(
        specificationRepository
    );
    
    const createSpecificationController = new CreateSpecificationController(
        createSpecificationUseCase
    );
    
    return createSpecificationController;
    
}
