import { Container } from 'inversify';
import { TodoModule } from './todo';
import { UserModule } from './user';

export default async () => {
  const container = new Container();
  await container.loadAsync(TodoModule, UserModule);
  return container;
};
