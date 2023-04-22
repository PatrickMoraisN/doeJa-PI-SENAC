import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const { id } = request.user;

    const updateUserUseCase = new UpdateUserUseCase();

    const user = await updateUserUseCase.execute({
      id,
      name,
      email,
    });

    return response.json(user);
  }
}

export { UpdateUserController };
