import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { handleErrors } from "./middlewares/handleErrors";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(handleErrors);

app.listen(3000, () => console.log("Server is running!"));
