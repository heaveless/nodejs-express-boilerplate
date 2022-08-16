import { User } from '@entities';
import { Connection } from 'typeorm';
import { provide } from 'inversify-binding-decorators';
import { dbClient } from '@common';
import { BaseRepository } from './base/base.repository';

@provide(UserRepository)
export class UserRepository extends BaseRepository<User> {
  constructor(@dbClient dbClient: Connection) {
    super(dbClient);
  }

  public async getOne(id: string) {
    return await this.Model.findOne(User, { where: { id } });
  }

  public async getMany() {
    return await this.Model.find(User);
  }

  public async createOne(entity: User) {
    return await this.Model.save(User, entity);
  }

  public async updateOne(entity: User) {
    return await this.Model.save(User, entity);
  }

  public async deleteOne(id: string) {
    return this.Model.delete(User, id);
  }
}
