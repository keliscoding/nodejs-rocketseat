import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UploadCarImagesUseCase } from './UploadCarImagesUseCase';

interface IFiles {
    filename: string;
}

class UploadCarImagesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

        const {id} = request.params;

        //o nome dessa variavel tem que ser passado pro multer
        const images = request.files as IFiles[];

        const images_name = images.map((file) => file.filename);

        await uploadCarImagesUseCase.execute({car_id: id, images_name});

        return response.status(201).send();

    }
}

export { UploadCarImagesController };
