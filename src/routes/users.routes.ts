import { Router } from "express";
import CreateUserService from "./../services/CreateUserService";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  const { name, email, password, type, latitude, longitude } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    type,
    latitude,
    longitude,
  });

  // @ts-expect-error
  delete user.password;

  return response.json(user);
});

export default usersRouter;
