import { Speciality } from "../entities/speciality";

export interface ISpecialityRepository {
  save(data: Speciality): Promise<Speciality>;
}
