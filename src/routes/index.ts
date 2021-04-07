import { Router } from "express";

import usersRouter from "./users.routes";
import authRouter from "./auth.routes";
import medicineRouter from "./medicine.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/auth", authRouter);
routes.use("/medicine", medicineRouter);

export default routes;
