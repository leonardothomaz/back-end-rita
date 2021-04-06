import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";

import AppError from "../errors/AppError";

interface Token {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token JWT não informado.", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, auth.jwt.secret);

    const { sub } = decoded as Token;

    request.user = {
      id: sub,
    };
    
    return next();
  } catch {
    throw new AppError("Token JWT inválido", 401);
  }
}
