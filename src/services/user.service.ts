import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { UserRepository } from '@repositories';
import { FindUserQuery } from '@entities';

@provide(UserService)
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async getById(id: string) {
    return await this.userRepository.findById(id);
  }

  public async getAll() {
    return await this.userRepository.findAll();
  }

  public async getOne(findUserQuery: FindUserQuery) {
    return await this.userRepository.findAny(findUserQuery);
  }
}
