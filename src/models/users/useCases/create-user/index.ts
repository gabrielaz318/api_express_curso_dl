import { CreateUserController } from "./create-user.controller";
import { PasswordBcrypt } from "../../../../infra/shared/crypto/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repository";

const userPrismaRepository = new UserPrismaRepository();
const passwordCrypto = new PasswordBcrypt();
const createUserController = new CreateUserController(
  userPrismaRepository,
  passwordCrypto
);

export { createUserController };
