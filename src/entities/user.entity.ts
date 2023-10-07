import { randomUUID } from "crypto";

type IUser = {
  name: string;
  username: string;
  password: string;
};

export class User {
  id: string;
  name: string;
  isAdmin: boolean;
  username: string;
  password: string;

  private constructor(props: IUser) {
    this.id = randomUUID();
    this.name = props.name;
    this.isAdmin = false;
    this.username = props.username;
    this.password = props.password;
  }

  static create(props: IUser) {
    const user = new User(props);
    return user;
  }
}
