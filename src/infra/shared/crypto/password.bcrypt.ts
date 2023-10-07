import { hash as bcryptHash } from "bcryptjs";
import { IPasswordCrypto } from "./password.crypto";

export class PasswordBcrypt implements IPasswordCrypto {
  hash(password: string): Promise<string> {
    return bcryptHash(password, 10);
  }
}
