import 'reflect-metadata';
import { BootstrapFactory } from './bootstrap';
// import { container } from '@common';
// import { bootstrap } from './bootstrap';
// import { inversifySetup, graphqlSetup } from '@config';
// import { configServer } from './config-server';

// const before = async () => {
//   configServer();
// };

// const now = async () => {
//   const module = await inversifySetup();
//   const graphql = await graphqlSetup(container);

//   await bootstrap(container, module, graphql);
// };

// (async () => {
//   await before();
//   await now();
// })();

const bootstrap = async () => {
  const app = await BootstrapFactory.create();
  app.listen(5000, () =>
    console.log(`server is running on: http://localhost:5000`)
  );
};
bootstrap();
