import { Router, response } from "express";
import { createUserController } from "../models/users/useCases/create-user";

const userRouter = Router();

userRouter.post("/users", async (request, response) => {
  await createUserController.handle(request, response);
});

export { userRouter };
