import { Router, response } from "express";
import { createUserController } from "../modules/users/useCases/create-user";
import { createSpecialityController } from "../modules/useCases/create-speciality";

const userRouter = Router();

userRouter.post("/users", async (request, response) => {
  await createUserController.handle(request, response);
});

userRouter.post("/speciality", async (request, response) => {
  await createSpecialityController.handle(request, response);
});

export { userRouter };
