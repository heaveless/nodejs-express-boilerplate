import { Todo } from '@entities';
import {
  DatabaseModule,
  DatabaseOptions,
  DatabaseOptionsFactory,
} from '@experimentallife/database';

class DatabaseConfiguration implements DatabaseOptionsFactory {
  async createDatabaseOptions(): Promise<DatabaseOptions> {
    return Promise.resolve({
      type: 'postgres',
      host: '192.168.0.2',
      port: 5432,
      username: 'admin',
      password: 'adminpassword',
      database: 'project_database',
      synchronize: true,
    });
  }
}

export const DatabaseConfigModule = DatabaseModule.registerAsync({
  useClass: DatabaseConfiguration,
  useEntities: [Todo],
});
