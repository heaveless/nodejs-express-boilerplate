import { AsyncContainerModule, interfaces } from 'inversify';
import { DefaultRepository } from '@repositories';
import { DefaultService } from '@services';
import { DefaultController } from '@controllers';
import { DefaultGraphql } from '@graphql';

export const getIoCModule = async () =>
  new AsyncContainerModule(
    async (bind: interfaces.Bind, _: interfaces.Unbind) => {
      bind<DefaultController>(DefaultController).to(DefaultController);

      bind<DefaultGraphql>(DefaultGraphql).to(DefaultGraphql);

      bind<DefaultService>(DefaultService).to(DefaultService);

      bind<DefaultRepository>(DefaultRepository).to(DefaultRepository);
    }
  );
