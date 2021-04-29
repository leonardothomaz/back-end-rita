import { app } from "../app";
import request from "supertest";

describe("users", () => {

    it("Should not be able to create a new medicine without the medicine name", async () => {
        const response = await request(app).post("/medicine").send({
            dosage: "15",
            laboratory: "LaboratoryTest",
        });

        expect(response.status).toBe(500);
    });

    it("Should not be able to create a new medicine without the medicine dosage ", async () => {
        const response = await request(app).post("/medicine").send({
            name: "MedicineTest",
            laboratory: "LaboratoryTest",
        });

        expect(response.status).toBe(500);
    });

    it("Should not be able to create a new medicine without the medicine laboratory ", async () => {
        const response = await request(app).post("/medicine").send({
            name: "MedicineTest",
            dosage: "15",
        });

        expect(response.status).toBe(500);
    });

    it("Should be able to create a new medicine", async () => {
        const response = await request(app).post("/medicine").send({
            name: "MedicineTest",
            dosage: "15",
            laboratory: "LaboratoryTest",
        });

        expect(response.status).toBe(201);
    });
});