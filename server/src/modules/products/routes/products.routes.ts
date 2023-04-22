import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { CreateProductController } from '../useCases/createProduct/CreateProductController';
import { ListProductController } from '../useCases/listProduct/ListProductController';

const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();

productsRouter.get('/', listProductController.handle);

productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      labels: Joi.array().items(Joi.string()).required(),
    },
  }),
  createProductController.handle,
);

export { productsRouter };
