import { prismaCliente } from "../../../../infra/databases/prisma.config";
import { User } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrismaRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | undefined> {
    const user = await prismaCliente.user.findUnique({
      where: {
        username,
      },
    });

    return user || undefined;
  }
  async save(data: User): Promise<User> {
    const user = await prismaCliente.user.create({
      data: {
        name: data.name,
        username: data.username,
        password: data.password,
        isAdmin: data.isAdmin,
      },
    });
    return user;
  }
}
