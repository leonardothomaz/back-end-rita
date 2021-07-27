import dotenv from "dotenv-safe";
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import routes from "./routes";

import "./database";
import AppError from "./errors/AppError";

dotenv.config({
  allowEmptyValues: true,
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  } else {
    console.log(err);
    
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

export { app };
