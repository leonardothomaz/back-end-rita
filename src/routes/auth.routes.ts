import { Router } from "express";
import AuthUserService from "./../services/AuthUserService";

const authRouter = Router();

interface Auth {
  email: string;
  password?: string;
}

authRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const authUserService = new AuthUserService();

  const { user, token } = await authUserService.execute({
    email,
    password,
  });

  const typedUser: Auth = user;

  delete typedUser.password;

  return response.json({ user, token });
});

export default authRouter;
