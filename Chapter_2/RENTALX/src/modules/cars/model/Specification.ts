import { v4 as uuid } from 'uuid';

interface Specification {
    id?: string,
    name: string,
    description: string,
    created_at: Date
}

class Specification {

    constructor({ name, description, created_at }: Specification) {
        if (!this.id) {
            this.id = uuid();
        }
        this.name = name;
        this.description = description;
        this.created_at = created_at;
    }
}

export default Specification;