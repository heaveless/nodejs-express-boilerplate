import { Client } from 'redis-om';

export const redisSetup = async () => {
  const { host, port } = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  };

  const connectionString = `redis://${host}:${port}`;

  const client = new Client();
  return await client.open(connectionString);
};
