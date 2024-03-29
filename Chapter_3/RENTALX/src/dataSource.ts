import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "host.docker.internal",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"],
    entities: [__dirname + "/modules/cars/entities/*.ts", __dirname + "/modules/accounts/entities/*.ts"]
});
