import { AsyncContainerModule, interfaces } from 'inversify';
import {
  Connection,
  ConnectionOptions,
  createConnection,
  Repository,
} from 'typeorm';
import { DATABASE_INSTANCE_TOKEN } from './database.constants';
import { DatabaseAsyncOptions, DatabaseOptions } from './database.interfaces';
import { EntityClassOrSchema } from './database.types';
import { getRepositoryToken } from './database.utils';

export class DatabaseModule {
  static async registerAsync(options: DatabaseAsyncOptions) {
    const provide = await this.createAsyncOptionsProvider(options);

    return new AsyncContainerModule(
      async (bind: interfaces.Bind, _: interfaces.Unbind) => {
        this.createDataSourceFeatures(options.useEntities, bind);

        bind<Connection>(DATABASE_INSTANCE_TOKEN).toConstantValue(provide);
      }
    );
  }

  private static async createAsyncOptionsProvider(
    options: DatabaseAsyncOptions
  ) {
    const { useClass, useEntities } = options;
    const instance = new useClass();
    const dbOptions = await instance.createDatabaseOptions();
    Object.assign(dbOptions, { entities: useEntities });

    return await this.createDataSourceFactory(dbOptions);
  }

  private static async createDataSourceFactory(options: DatabaseOptions) {
    return await createConnection(options as ConnectionOptions);
  }

  private static createDataSourceFeatures(
    entities: EntityClassOrSchema[],
    bind: interfaces.Bind
  ) {
    entities.map((entity: EntityClassOrSchema) =>
      bind<any>(getRepositoryToken(entity)).toConstructor(
        Repository<typeof entity>
      )
    );
  }
}
