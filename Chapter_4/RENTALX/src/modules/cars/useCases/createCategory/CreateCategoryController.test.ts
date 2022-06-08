import request from "supertest";
import { hash } from "bcryptjs";
import { v4 as uuid } from 'uuid';

import { app } from "@shared/infra/http/app";
import { AppDataSource } from '@src/dataSource';


describe("Create Category Controller", () => {

    beforeAll( async () => {
        await AppDataSource.initialize();

        await AppDataSource.runMigrations();

        const id = uuid();
        const password = await hash("admin", 8);

        await AppDataSource.manager.query(
            `INSERT INTO USERS( id, name, email, password, "isAdmin", created_at, driver_license )
        values('${id}','admin','admin@admin.com','${password}', true , 'now()', 'XXXXXXXX')
        `
        );

    })

    afterAll(async () => {
        await AppDataSource.dropDatabase();
        await AppDataSource.destroy();
    });

    it("should be able to create a new category", async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@admin.com",
            password: "admin"
        })

        const { token } = responseToken.body;

        const response = await request(app).post("/categories").send({
            name: "Category_Supertest",
            description: "Supertest_category_description",
        }).set(
            {
                Authorization: `Bearer ${token}`
            }
        )

        expect(response.status).toBe(201);
    });
});


