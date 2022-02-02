import { User } from '@entities';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

const entities = [User];

export const getConnectionObject = () =>
  ({
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    entities,
  } as ConnectionOptions);

export const getDatabaseConnection = async () => {
  const databaseConnection = getConnectionObject();

  const connection: Connection = await createConnection(databaseConnection);
  return connection;
};
