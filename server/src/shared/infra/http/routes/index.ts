import { productsRouter } from '@/modules/products/routes/products.routes';
import { sessionsRouter } from '@/modules/users/routes/sessions.routes';
import { userRouter } from '@/modules/users/routes/user.routes';
import { usersRouter } from '@/modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/user', userRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
