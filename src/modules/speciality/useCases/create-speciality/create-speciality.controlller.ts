import { Request, Response } from "express";
import { logger } from "../../../utils/logger";
import { CreateSpecialityUseCase } from "./create-speciality.usecase";
import { ISpecialityRepository } from "../../speciality/repositories/speciality.repository";

export class CreateSpecialityController {
  constructor(private specialityRepository: ISpecialityRepository) {}

  async handle(request: Request, response: Response) {
    try {
      logger.info("Especialidade sendo criada!");

      const useCase = new CreateSpecialityUseCase(this.specialityRepository);

      const result = await useCase.execute(request.body);

      return response.json(result);
    } catch (err: any) {
      logger.error(err.stack);
      return response.status(err.statusCode).json(err.message);
    }
  }
}
