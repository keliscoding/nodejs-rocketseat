import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "host.docker.internal",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
    dropSchema: process.env.NODE_ENV === "test",
    migrations: [__dirname + "/shared/infra/typeorm/migrations/*.ts"],
    entities: [
        __dirname + "/modules/cars/infra/typeorm/entities/*.ts",
        __dirname + "/modules/accounts/infra/typeorm/entities/*.ts",
        __dirname + "/modules/rentals/infra/typeorm/entities/*.ts",
    ],
});
