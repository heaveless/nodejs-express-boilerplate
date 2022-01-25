import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import { DefaultRepository } from '@repositories';

@provide(DefaultService)
export class DefaultService {
  constructor(
    @inject(DefaultRepository) private defaultRepository: DefaultRepository
  ) {}

  public async index() {
    return await this.defaultRepository.index();
  }

  public async getAll() {
    return await this.defaultRepository.findAll();
  }
}
