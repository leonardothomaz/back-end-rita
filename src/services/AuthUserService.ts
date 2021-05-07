import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";

import AppError from "../errors/AppError";

import User from "./../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("Usuário ou senha incorreto.", 401);
    }

    const pass = password || '';

    const passwordMatched = await compare(pass, user.password);

    if (!passwordMatched) {
      throw new AppError("Usuário ou senha incorreto.", 401);
    }

    const SECRET = process.env.SECRET || '';

    const token = sign({}, SECRET, {
      subject: user.id,
      expiresIn: process.env.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthUserService;
