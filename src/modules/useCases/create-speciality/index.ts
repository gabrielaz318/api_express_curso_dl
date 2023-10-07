import { CreateSpecialityController } from "./create-speciality.controlller";
import { SpecialityPrismaRepository } from "../../speciality/repositories/implementations/speciality.prisma.repository";

const specialityPrismaRepository = new SpecialityPrismaRepository();
const createSpecialityController = new CreateSpecialityController(
  specialityPrismaRepository
);

export { createSpecialityController };
