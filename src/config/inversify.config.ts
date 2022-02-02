import { AsyncContainerModule, interfaces } from 'inversify';
import { UserRepository } from '@repositories';
import { UserService, MailerService } from '@services';
import { MailerController, UserController } from '@controllers';
import { UserGraphql } from '@graphql';

export const getIoCModule = async () =>
  new AsyncContainerModule(
    async (bind: interfaces.Bind, _: interfaces.Unbind) => {
      bind<UserController>(UserController).to(UserController);
      bind<MailerController>(MailerController).to(MailerController);

      bind<UserGraphql>(UserGraphql).to(UserGraphql);

      bind<UserService>(UserService).to(UserService);
      bind<MailerService>(MailerService).to(MailerService);

      bind<UserRepository>(UserRepository).to(UserRepository);
    }
  );
