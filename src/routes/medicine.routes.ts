import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateMedicineService from "./../services/CreateMedicineService";
import ensureAuth from "./../middlewares/ensureAuth";
import MedicineRepository from "./../repositories/MedicineRepository";

const medicineRouter = Router();

medicineRouter.get("/", ensureAuth, async (request, response) => {
  const medicineRepository = getCustomRepository(MedicineRepository);

  const medicine = await medicineRepository.find();

  return response.json(medicine);
});

medicineRouter.post("/", ensureAuth, async (request, response) => {
  const { name, dosage, laboratory } = request.body;

  const createMedicine = new CreateMedicineService();

  const medicine = await createMedicine.execute({
    name,
    dosage,
    laboratory,
  });

  return response.json(medicine);
});

export default medicineRouter;
