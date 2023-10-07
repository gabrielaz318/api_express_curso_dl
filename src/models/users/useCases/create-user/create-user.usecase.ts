import { User } from "../../entities/user.entity";
import { ParameterRequiredError } from "../../../../errors/parameter-required.error";
import { IUserRepository } from "../../repositories/user.repository";
import { CustomError } from "../../../../errors/custom.error";

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

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

    const userCreated = await this.userRepository.save(user);

    return userCreated;
  }
}
