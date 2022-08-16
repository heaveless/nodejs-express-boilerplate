import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { UserRepository } from '@repositories';
import { User, UserDto } from '@entities';

@provide(UserService)
export class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}

  public async getOne(id: string) {
    return await this.userRepository.getOne(id);
  }

  public async getMany() {
    return await this.userRepository.getMany();
  }

  public async create(dto: UserDto) {
    return await this.userRepository.createOne(dto as any as User);
  }

  public async update(dto: UserDto) {
    return await this.userRepository.createOne(dto as any as User);
  }

  public async delete(id: string) {
    return await this.userRepository.delete(id);
  }
}
