import { Router } from 'express';
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import { ListUsersController } from '../useCases/listUsers/ListUsersController';
import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { DeleteUserController } from '../useCases/deleteUser/DeleteUserController';
import { ShowUserController } from '../useCases/showUser/ShowUserController';
import { isAuthenticated } from '@/shared/infra/http/middlewares/isAuthenticated';
import { UpdateUserController } from '../useCases/updateUser/UpdateUserController';

const usersRouter = Router();

const updateUserController = new UpdateUserController();
const showUserController = new ShowUserController();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

usersRouter.get('/', isAuthenticated, listUsersController.handle);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      isADonor: Joi.boolean().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  createUserController.handle,
);

usersRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  isAuthenticated,
  updateUserController.handle,
);

usersRouter.delete('/', isAuthenticated, deleteUserController.handle);

usersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  isAuthenticated,
  showUserController.handle,
);

export { usersRouter };
