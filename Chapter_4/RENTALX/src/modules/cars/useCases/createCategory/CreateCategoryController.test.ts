import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create Category Controller", () => {
    it("test", async () => {
        const bruh = await request(app).get("/cars/available").expect(500);
        console.log(bruh)
    });
});
