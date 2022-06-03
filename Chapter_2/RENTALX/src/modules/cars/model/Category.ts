import { v4 as uuid } from 'uuid';

interface Category {
    id?: string,
    name: string,
    description: string,
    created_at: Date;
}


class Category {

    constructor({ name, description }: Category) {
        if (!this.id) {
            this.id = uuid();
        }
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }
}

export default Category;