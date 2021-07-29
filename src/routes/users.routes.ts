import { Router } from 'express';
import CreateUserService from './../services/CreateUserService';

const usersRouter = Router();

interface User {
  name: string;
  email: string;
  password?: string;
  type: string;
  latitude: string;
  longitude: string;
}

usersRouter.post('/', async (request, response) => {
  const { name, email, password, type, latitude, longitude } = request.body;

  const createUser = new CreateUserService();

  const user: User = await createUser.execute({
    name,
    email,
    password,
    type,
    latitude,
    longitude,
  });

  delete user.password;

  return response.json(user);
});

export default usersRouter;
