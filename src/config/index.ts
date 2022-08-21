// export * as database from './database';

import { DatabaseConfigModule } from './database.config';
import { Container } from 'inversify';
import { ConfigConfigModule } from './config.config';

// export { mailerSetup } from './mailer.config';
// export { inversifySetup } from './inversify.config';
// export { graphqlSetup } from './graphql.config';
// export { expressSetup } from './express.config';
// export { swaggerSetup } from './swagger.config';

// export { Environment, IEnvironment, Global } from './environment.config';

export default async () => {
  const container = new Container();
  await container.loadAsync(
    await ConfigConfigModule,
    await DatabaseConfigModule
  );
  return container;
};
