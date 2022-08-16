import { AsyncContainerModule, interfaces } from 'inversify';
import { TodoRepository, UserRepository } from '@repositories';
import { UserService, MailerService, TodoService } from '@services';
import { TodoController, UserController } from '@controllers';
import { TodoGraphql, UserGraphql } from '@graphql';

export const getIoCModule = async () =>
  new AsyncContainerModule(
    async (bind: interfaces.Bind, _: interfaces.Unbind) => {
      bind<UserController>(UserController).to(UserController);
      bind<TodoController>(TodoController).to(TodoController);

      bind<UserGraphql>(UserGraphql).to(UserGraphql);
      bind<TodoGraphql>(TodoGraphql).to(TodoGraphql);

      bind<MailerService>(MailerService).to(MailerService);
      bind<TodoService>(TodoService).to(TodoService);
      bind<UserService>(UserService).to(UserService);

      bind<TodoRepository>(TodoRepository).to(TodoRepository);
      bind<UserRepository>(UserRepository).to(UserRepository);
    }
  );
