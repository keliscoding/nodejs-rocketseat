import { AppDataSource } from "../../../../dataSource";
import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';



async function create() {
    
    await AppDataSource.initialize();

    const id = uuid();
    const password = await hash('admin', 8);

    await AppDataSource.manager.query(
        `INSERT INTO USERS( id, name, email, password, "isAdmin", created_at, driver_license )
        values('${id}','admin','admin@admin.com','${password}', true , 'now()', 'XXXXXXXX')
        `
    )

}

create().then(() => console.log("User admin created!"));