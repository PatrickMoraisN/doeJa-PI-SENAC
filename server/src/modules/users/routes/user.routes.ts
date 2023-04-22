import { isAuthenticated } from '@/shared/infra/http/middlewares/isAuthenticated';
import { Router } from 'express';
import { GetUserController } from '../useCases/getUser/GetUserController';

const userRouter = Router();

const getUserController = new GetUserController();

userRouter.get('/', isAuthenticated, getUserController.handle);

export { userRouter };
