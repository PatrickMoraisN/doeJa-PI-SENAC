import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(
    request: Request,
    response: Response,
  ): Promise<Response<Product>> {
    const { name, description, labels } = request.body;
    const createProductUseCase = new CreateProductUseCase();
    const product = await createProductUseCase.execute({
      name,
      description,
      labels,
    });
    return response.json(product);
  }
}

export { CreateProductController };
