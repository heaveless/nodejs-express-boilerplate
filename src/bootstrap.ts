// import 'reflect-metadata';
// import { AsyncContainerModule, Container } from 'inversify';
// import { InversifyExpressServer } from 'inversify-express-utils';
// import { AuthProvider, TYPES } from '@common';
// import { Application } from 'express';
// import { ApolloServer, ExpressContext } from 'apollo-server-express';
// import { Global, expressSetup, swaggerSetup } from '@config';

import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import setupConfiguration from './config';
import setupModules from './modules';

// export const bootstrap = async (
//   container: Container,
//   module: AsyncContainerModule,
//   graphql: ApolloServer<ExpressContext>
// ) => {
//   if (!container.isBound(TYPES.App)) {
//     await container.loadAsync(module);

//     const server = new InversifyExpressServer(
//       container,
//       null,
//       null,
//       null,
//       AuthProvider
//     );

//     // server.setConfig(
//     //   (app: Application) => (expressSetup(app), swaggerSetup(app))
//     // );

//     const app = server.build();
//     // await graphql.start();

//     // graphql.applyMiddleware({ app });

//     app.listen(Global.PORT, () =>
//       console.log(`server is running! => http://localhost:${Global.PORT}`)
//     );

//     container.bind<Application>(TYPES.App).toConstantValue(app);

//     return app;
//   } else {
//     return container.get<Application>(TYPES.App);
//   }
// };

export class BootstrapFactory {
  static async create() {
    const express = await this.createApplication();
    return express.build();
  }

  private static async createApplication() {
    const configContainer = await setupConfiguration();
    const modulesContainer = await setupModules();
    const container = Container.merge(configContainer, modulesContainer);

    return new InversifyExpressServer(container);
  }
}
