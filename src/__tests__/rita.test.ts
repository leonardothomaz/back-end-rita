import { app } from "../app";
import request from "supertest";

const email = `${Math.random()}@${Math.random()}.com`;
describe("Users", () => {
  it("Should not be able to create a new user without the user password", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: email,
      type: "0",
    });

    expect(response.status).toBe(500);
  });

  it("Should not be able to create a new user without the user e-mail", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      password: "123",
      type: "0",
    });

    expect(response.status).toBe(500);
  });

  it("Should not be able to create a new user without the user type", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: email,
      password: "123",
    });

    expect(response.status).toBe(500);
  });

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: email,
      password: "123",
      type: "0",
    });

    expect(response.status).toBe(200);
  });

  it("Should not be able to create a new user with exists email", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: email,
      password: "123",
      type: "0",
    });

    expect(response.status).toBe(400);
  });
});

describe("Authentication", () => {
  it("Should not be able to create a new authenticate without the user email", async () => {
    const response = await request(app).post("/auth").send({
      password: "123",
    });

    expect(response.status).toBe(401);
  });

  it("Should not be able to create a new authenticate without the user password", async () => {
    const response = await request(app).post("/auth").send({
      email: "teste@test.com",
    });

    expect(response.status).toBe(401);
  });

  it("Should be able to create a new authenticate", async () => {
    const response = await request(app).post("/auth").send({
      email: email,
      password: "123",
    });

    expect(response.status).toBe(201);
  });
});
