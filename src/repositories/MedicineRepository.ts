import { EntityRepository, Repository } from "typeorm";

import Medicine from "./../models/Medicine";

@EntityRepository(Medicine)
class MedicineRepository extends Repository<Medicine> {
  public async findByName(name: String): Promise<Medicine | null> {
    const findMedicine = await this.findOne({
      where: { name },
    });

    return findMedicine || null;
  }
}

export default MedicineRepository;