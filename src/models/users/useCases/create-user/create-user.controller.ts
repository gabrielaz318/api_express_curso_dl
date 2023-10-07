import { Request, Response } from "express";
import { logger } from "../../../../utils/logger";
import { CreateUserUseCase } from "./create-user.usecase";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";

export class CreateUserController {
  constructor(
    private UserRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

  async handle(request: Request, response: Response) {
    try {
      logger.info("Usuário sendo criado!");

      const data = request.body;

      const useCase = new CreateUserUseCase(
        this.UserRepository,
        this.passwordCrypto
      );
      const result = await useCase.execute(data);

      return response.json(result);
    } catch (err: any) {
      logger.error(err.stack);
      return response.status(err.statusCode).json(err.message);
    }
  }
}
