import { AsyncContainerModule, interfaces } from 'inversify';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

export const TodoModule = new AsyncContainerModule(
  async (bind: interfaces.Bind, _: interfaces.Unbind) => {
    bind<TodoController>(TodoController).toSelf();
    bind<TodoService>(TodoService).toSelf();
  }
);
