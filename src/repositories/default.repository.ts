import { Default } from '../entities/default.entity';
import { Connection } from 'typeorm';
import { provide } from 'inversify-binding-decorators';
import { dbClient } from '@common';
import { BaseRepository } from './base/base.repository';

@provide(DefaultRepository)
export class DefaultRepository extends BaseRepository<Default> {
  constructor(@dbClient dbClient: Connection) {
    super(dbClient);
  }
  public async index() {
    return 'hello worlaaaaad!';
  }

  public async findAll() {
    return await this.Model.find(Default);
  }
}
