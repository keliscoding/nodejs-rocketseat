import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { inject, injectable } from 'tsyringe';
interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
    private carsImagesRepository: ICarsImagesRepository;

    constructor(
        @inject("CarsImagesRepository")
        carsImagesRepository: ICarsImagesRepository,
    ) {
        this.carsImagesRepository = carsImagesRepository
    }

    async execute({ car_id, images_name }: IRequest): Promise<void> {
        images_name.forEach(async image => {
            await this.carsImagesRepository.create(car_id, image)
        })

    }
}

export { UploadCarImagesUseCase };
