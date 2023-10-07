import { randomUUID } from "crypto";

type ISpeciality = {
  name: string;
  description: string;
};

export class Speciality {
  id: string;
  name: string;
  description: string;
  createdAt: Date;

  private constructor({ name, description }: ISpeciality) {
    this.name = name;
    this.id = randomUUID();
    this.createdAt = new Date();
    this.description = description;
  }

  static create(props: ISpeciality) {
    if (!props.name) {
      throw new Error("Speciality name is required.");
    }

    const speciality = new Speciality(props);
    return speciality;
  }
}
