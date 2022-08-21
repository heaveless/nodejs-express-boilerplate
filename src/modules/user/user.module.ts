import { AsyncContainerModule, interfaces } from 'inversify';

export const UserModule = new AsyncContainerModule(
  async (bind: interfaces.Bind, _: interfaces.Unbind) => {}
);
