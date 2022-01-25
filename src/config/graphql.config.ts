import { DefaultGraphql } from '@graphql';
import { ApolloServer } from 'apollo-server-express';
import { Container } from 'inversify';
import { buildSchema } from 'type-graphql';

export const getGraphqlConfiguration = async (container: Container) => {
  const schema = await buildSchema({
    container: container,
    emitSchemaFile: true,
    resolvers: [DefaultGraphql],
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();

  return apolloServer;
};
