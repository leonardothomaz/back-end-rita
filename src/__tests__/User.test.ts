import { app } from "../app";
import request from "supertest";

describe("users", () => {

  it("Should not be able to create a new user without the user password", async () => {
    const response = await request(app).post("/users").send({
      email: "test@test.com",
      type: 0,
    });

    expect(response.status).toBe(400);
  });

  it("Should not be able to create a new user without the user e-mail", async () => {
    const response = await request(app).post("/users").send({
      password: "123",
      type: 0,
    });

    expect(response.status).toBe(400);
  });

  it("Should not be able to create a new user without the user type", async () => {
    const response = await request(app).post("/users").send({
      email: "test@test.com",
      password: "123",
    });

    expect(response.status).toBe(400);
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "teste@test.com",
      password: "123",
      type: 0,
    });

    expect(response.status).toBe(201);
  });

  it("Should not be able to create a new user with exists email", async () => {
    const response = await request(app).post("/users").send({
      email: "teste@test.com",
      password: "123",
      type: 0,
    });

    expect(response.status).toBe(400);
  });
});
