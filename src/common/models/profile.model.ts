import { Principal } from 'inversify-express-utils';

export class Profile implements Principal {
  public details: unknown;
  constructor(details: unknown) {
    this.details = details;
  }

  public isAuthenticated() {
    return Promise.resolve<boolean>(true);
  }

  public isResourceOwner(resourceId: unknown) {
    return Promise.resolve<boolean>(resourceId === 1111);
  }

  public isInRole(role: string) {
    return Promise.resolve<boolean>(role === 'admin');
  }
}
