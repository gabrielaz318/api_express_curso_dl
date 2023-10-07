import { Speciality } from "../../speciality/entities/speciality";
import { ISpecialityRepository } from "../../speciality/repositories/speciality.repository";

type SpecialityRequest = {
  name: string;
  description: string;
};

export class CreateSpecialityUseCase {
  constructor(private specialityRepository: ISpecialityRepository) {}

  async execute(data: SpecialityRequest) {
    const speciality = Speciality.create(data);

    const specialityCreated = await this.specialityRepository.save(speciality);
    return specialityCreated;
  }
}
