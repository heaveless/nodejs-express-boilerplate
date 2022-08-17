import { Todo, User } from '@entities';
import { ConnectionOptions, createConnection } from 'typeorm';

export const databaseSetup = async () => {
  const configure = {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    entities: [Todo, User],
  } as ConnectionOptions;

  return createConnection(configure);
};
