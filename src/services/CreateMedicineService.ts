import { getRepository } from "typeorm";

import Medicine from "./../models/Medicine";

interface Request {
  name: string;
  dosage: string;
  laboratory: string;
}

class CreateUserService {
  public async execute({
    name,
    dosage,
    laboratory,
  }: Request): Promise<Medicine> {
    const medicineRepository = getRepository(Medicine);

    const medicine = medicineRepository.create({
      name,
      dosage,
      laboratory,
    });

    await medicineRepository.save(medicine);

    return medicine;
  }
}

export default CreateUserService;
