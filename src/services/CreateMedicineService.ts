import { getRepository } from "typeorm";

import Medicine from "./../models/Medicine";

interface Request {
  user_id: string;
  name: string;
  dosage: string;
  laboratory: string;
  intakeinterval: string;
  startedhour: string;
}

class CreateUserService {
  public async execute({
    user_id,
    name,
    dosage,
    laboratory,
    intakeinterval,
    startedhour,
  }: Request): Promise<Medicine> {
    const medicineRepository = getRepository(Medicine);

    const medicine = medicineRepository.create({
      user_id,
      name,
      dosage,
      laboratory,
      intakeinterval,
      startedhour,
    });

    await medicineRepository.save(medicine);

    return medicine;
  }
}

export default CreateUserService;
