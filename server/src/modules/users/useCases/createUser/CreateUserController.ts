import { User } from '@modules/users/infra/typeorm/entities/Users';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response<User>> {
    const { name, email, isADonor, password } = request.body;
    const createUserUseCase = new CreateUserUseCase();
    const user = await createUserUseCase.execute({
      name,
      email,
      isADonor,
      password,
    });
    return response.json(user);
  }
}

export { CreateUserController };
