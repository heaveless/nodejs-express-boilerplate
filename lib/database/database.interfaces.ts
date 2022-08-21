import { Type } from '@experimentallife/common';
import { EntityClassOrSchema } from './database.types';

export interface DatabaseOptions {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}

export interface DatabaseOptionsFactory {
  createDatabaseOptions(): Promise<DatabaseOptions>;
}

export interface DatabaseAsyncOptions {
  useClass: Type<DatabaseOptionsFactory>;
  useEntities: EntityClassOrSchema[];
}
