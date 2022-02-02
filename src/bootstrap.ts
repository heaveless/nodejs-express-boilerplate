import 'reflect-metadata';
import { AsyncContainerModule, Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { TYPES } from '@common';
import { Application } from 'express';
import { Connection } from 'typeorm';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import {
  Environment as Env,
  expressSetup,
  IEnvironment,
  swaggerSetup,
} from '@config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Transporter } from 'nodemailer';

export const bootstrap = async (
  container: Container,
  connection: Connection,
  mailer: Transporter<SMTPTransport.SentMessageInfo>,
  iocModule: AsyncContainerModule,
  gqlServer: ApolloServer<ExpressContext>
) => {
  if (container.isBound(TYPES.App) === false) {
    container.bind<IEnvironment>(TYPES.Environment).toConstantValue(Env);
    container.bind<Connection>(TYPES.DbClient).toConstantValue(connection);
    container
      .bind<Transporter<SMTPTransport.SentMessageInfo>>(TYPES.MailerClient)
      .toConstantValue(mailer);
    await container.loadAsync(iocModule);

    const server = new InversifyExpressServer(container);

    server.setConfig((app: Application) => {
      expressSetup(app), swaggerSetup(app);
    });

    const app = server.build();

    gqlServer.applyMiddleware({ app });

    app.listen(Env.PORT, () =>
      console.log(`server is running! => http://localhost:${Env.PORT}`)
    );

    container.bind<Application>(TYPES.App).toConstantValue(app);

    return app;
  } else {
    return container.get<Application>(TYPES.App);
  }
};
