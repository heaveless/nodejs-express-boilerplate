import { TodoGraphql, UserGraphql } from '@graphql';
import { ApolloServer } from 'apollo-server-express';
import { Container } from 'inversify';
import { buildSchema } from 'type-graphql';

export const graphqlSetup = async (container: Container) => {
  const schema = await buildSchema({
    container: container,
    emitSchemaFile: true,
    resolvers: [TodoGraphql, UserGraphql],
  });

  const configure = { schema };

  return new ApolloServer(configure);
};
