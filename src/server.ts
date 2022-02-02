import 'reflect-metadata';
import { container } from '@common';
import { bootstrap } from './bootstrap';
import {
  getDatabaseConnection,
  getIoCModule,
  getGraphqlConfiguration,
  getMailerConnection,
} from '@config';

const runApp = async () => {
  const connection = await getDatabaseConnection();
  const mailer = await getMailerConnection();
  const iocModule = await getIoCModule();
  const gqlServer = await getGraphqlConfiguration(container);

  const app = await bootstrap(
    container,
    connection,
    mailer,
    iocModule,
    gqlServer
  );
  return app;
};

runApp();
