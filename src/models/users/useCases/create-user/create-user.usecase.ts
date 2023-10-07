import { User } from "../../entities/user.entity";
import { ParameterRequiredError } from "../../../../errors/parameter-required.error";
import { IUserRepository } from "../../repositories/user.repository";

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
      throw new ParameterRequiredError("Username already exists");
    }

    const user = User.create(data);

    const userCreated = await this.userRepository.save(user);

    return userCreated;
  }
}
