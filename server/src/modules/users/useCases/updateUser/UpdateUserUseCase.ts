import { User } from '@modules/users/infra/typeorm/entities/Users';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
  name?: string;
  email: string;
}

class UpdateUserUseCase {
  async execute(user: IRequest): Promise<User> {
    const { id } = user;

    const usersRepository = getCustomRepository(UsersRepository);
    const userFound = await usersRepository.findById(id);

    if (!userFound) {
      throw new AppError('User not found', 404);
    }

    const userHasSameEmail = await usersRepository.findByEmail(user.email);

    if (userHasSameEmail && user?.email !== userFound.email) {
      throw new AppError('User already exists', 400);
    }

    const userUpdated = await usersRepository.save(user);

    return userUpdated;
  }
}

export { UpdateUserUseCase };
