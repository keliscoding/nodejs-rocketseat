import { v4 as uuid } from 'uuid';
interface Specifications {
    id?: string,
    name: string,
    description: string,
    created_at: Date
}

class Specifications {

    constructor({ name, description, created_at }: Specifications) {
        if (!this.id) {
            this.id = uuid();
        }
        this.name = name;
        this.description = description;
        this.created_at = created_at;
    }
}

export default Specifications;