import 'reflect-metadata';
import { container } from '@common';
import { bootstrap } from './bootstrap';
import { inversifySetup, graphqlSetup } from '@config';
import { configServer } from './config-server';

const before = async () => {
  configServer();
};

const now = async () => {
  const module = await inversifySetup();
  const graphql = await graphqlSetup(container);

  await bootstrap(container, module, graphql);
};

(async () => {
  await before();
  await now();
})();
