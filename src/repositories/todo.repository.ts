import { Todo } from '@entities';
import { Connection } from 'typeorm';
import { provide } from 'inversify-binding-decorators';
import { dbClient } from '@common';
import { BaseRepository } from './base/base.repository';

@provide(TodoRepository)
export class TodoRepository extends BaseRepository<Todo> {
  constructor(@dbClient dbClient: Connection) {
    super(dbClient);
  }

  public async getOne(id: string) {
    return await this.Model.findOne(Todo, { where: { id } });
  }

  public async getMany() {
    return await this.Model.find(Todo);
  }

  public async createOne(entity: Todo) {
    return await this.Model.save(Todo, entity);
  }

  public async updateOne(entity: Todo) {
    return await this.Model.save(Todo, entity);
  }

  public async deleteOne(id: string) {
    return this.Model.delete(Todo, id);
  }
}
