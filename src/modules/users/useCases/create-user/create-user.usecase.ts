import { User } from "../../entities/user.entity";
import { CustomError } from "../../../../errors/custom.error";
import { IUserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from "../../../../infra/shared/crypto/password.crypto";
import { ParameterRequiredError } from "../../../../errors/parameter-required.error";

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordCrypto: IPasswordCrypto
  ) {}

  async execute(data: UserRequest) {
    if (!data.username || !data.password) {
      throw new ParameterRequiredError("Username/password is required.", 422);
    }

    const existUser = await this.userRepository.findByUsername(data.username);

    if (existUser) {
      throw new CustomError(
        "Username already exists",
        400,
        "User_Exists_Error"
      );
    }

    const user = User.create(data);

    const passwordHashed = await this.passwordCrypto.hash(data.password);
    user.password = passwordHashed;
    const userCreated = await this.userRepository.save(user);

    return userCreated;
  }
}
