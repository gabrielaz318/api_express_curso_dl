import { Speciality } from "../../entities/speciality";
import { ISpecialityRepository } from "../speciality.repository";
import { prismaClient } from "../../../../infra/databases/prisma.config";

export class SpecialityPrismaRepository implements ISpecialityRepository {
  async save(data: Speciality): Promise<Speciality> {
    const result = await prismaClient.speciality.create({
      data: {
        id: data.id,
        name: data.name,
        description: data.description,
      },
    });

    return result;
  }
}
