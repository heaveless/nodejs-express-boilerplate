import 'reflect-metadata';
import { container } from '@common';
import { bootstrap } from './bootstrap';
import {
  getDatabaseConnection,
  getIoCModule,
  getGraphqlConfiguration,
} from '@config';

const runApp = async () => {
  const connection = await getDatabaseConnection();
  const iocModule = await getIoCModule();
  const gqlServer = await getGraphqlConfiguration(container);

  const app = await bootstrap(container, connection, iocModule, gqlServer);
  return app;
};

runApp();
