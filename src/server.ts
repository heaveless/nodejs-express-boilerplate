import 'reflect-metadata';
import { container } from '@common';
import { bootstrap } from './bootstrap';
import { inversifySetup, graphqlSetup } from '@config';

const runApp = async () => {
  const module = await inversifySetup();
  const graphql = await graphqlSetup(container);

  await bootstrap(container, module, graphql);
};

runApp();
