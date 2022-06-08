import { Repository } from "typeorm";


import Category from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { AppDataSource } from "@src/dataSource";


// singleton => criar apenas uma instancia de uma classe, que será uma instancia global
// deve-se verificar se ela deve ser um singleton ou se ela precisa de mais de uma instancia

export default class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    //singleton
    // private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = AppDataSource.getRepository(Category)
    }

    // public static getInstance(): CategoriesRepository {
    //     if(!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        
        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const categories = await this.repository.findOne({ where: {
            name: name
        }})

        return categories;
    }
}
