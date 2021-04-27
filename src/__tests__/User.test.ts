import { app } from '../app';
import request from 'supertest';
import { getConnection } from 'typeorm';
import createConnection from '../database';

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should not be able to create a new user without the user e-mail", async () => {
        const response = await request(app).post("/users").send({
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });

    it("Should not be able to create a new user without the user name", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
        });

        expect(response.status).toBe(400);
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a new user with exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });
});