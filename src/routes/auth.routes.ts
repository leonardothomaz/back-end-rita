import { Router } from "express";
import AuthUserService from "./../services/AuthUserService";

const authRouter = Router();

authRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const authUserService = new AuthUserService();

  const { user, token } = await authUserService.execute({
    email,
    password,
  });

  // @ts-expect-error
  delete user.password;

  return response.json({ user, token });
});

export default authRouter;
