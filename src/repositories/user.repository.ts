import { FindUserQuery, User } from '@entities';
import { Connection } from 'typeorm';
import { provide } from 'inversify-binding-decorators';
import { dbClient } from '@common';
import { BaseRepository } from './base/base.repository';

@provide(UserRepository)
export class UserRepository extends BaseRepository<User> {
  constructor(@dbClient dbClient: Connection) {
    super(dbClient);
  }

  public async findById(id: string) {
    return await this.Model.findOne(User, { where: { id } });
  }

  public async findAny(findUserQuery: FindUserQuery) {
    return await this.Model.findOne(User, { where: findUserQuery });
  }

  public async findAll() {
    return await this.Model.find(User);
  }
}
