import fs from "fs";
import {parse} from 'csv-parse';

interface IRequest {
    file: Express.Multer.File;
}

class ImportCategoryUseCase {
    constructor() {}

    execute({file}: IRequest): void {
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();

        stream.pipe(parseFile);

        parseFile.on("data", async(line) => {
            console.log(line)
        });
    }
}

export { ImportCategoryUseCase };
