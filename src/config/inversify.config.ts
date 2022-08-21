// import { AsyncContainerModule, interfaces } from 'inversify';
// import { TodoRepository, UserRepository } from '@repositories';
// import { UserService, MailerService, TodoService } from '@services';
// import { AuthController, TodoController, UserController } from '@controllers';
// import { TodoGraphql, UserGraphql } from '@graphql';
// import { Connection } from 'typeorm';
// import { MailerType, TYPES } from '@common';
// import { Environment, mailerSetup, IEnvironment } from '@config';

// export const inversifySetup = async () =>
//   new AsyncContainerModule(
//     async (bind: interfaces.Bind, _: interfaces.Unbind) => {
//       bind<IEnvironment>(TYPES.Environment).toConstantValue(Environment);
//       // bind<Connection>(TYPES.DbClient).toConstantValue(await databaseSetup());
//       bind<MailerType>(TYPES.MailerClient).toConstantValue(await mailerSetup());

//       bind<AuthController>(AuthController).to(AuthController);
//       bind<UserController>(UserController).to(UserController);
//       bind<TodoController>(TodoController).to(TodoController);

//       bind<UserGraphql>(UserGraphql).to(UserGraphql);
//       bind<TodoGraphql>(TodoGraphql).to(TodoGraphql);

//       bind<MailerService>(MailerService).to(MailerService);
//       bind<TodoService>(TodoService).to(TodoService);
//       bind<UserService>(UserService).to(UserService);

//       bind<TodoRepository>(TodoRepository).to(TodoRepository);
//       bind<UserRepository>(UserRepository).to(UserRepository);
//     }
//   );
