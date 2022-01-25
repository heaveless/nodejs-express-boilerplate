import { decorate, injectable } from 'inversify';
import { Connection, EntityManager, Repository } from 'typeorm';

decorate(injectable(), Repository);

export class BaseRepository<TEntity> extends Repository<TEntity> {
  protected Model: EntityManager;

  public constructor(dbClient: Connection) {
    super();
    this.Model = dbClient.manager;
  }
}
