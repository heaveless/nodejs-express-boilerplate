import { Principal } from 'inversify-express-utils';

export interface IData {
  info: {
    [key: string]: string;
  };
  roles: string[];
}
export interface IProfileDetails {
  data: IData;
  success: boolean;
  message?: unknown;
}

export class Profile implements Principal {
  public details: IProfileDetails;
  constructor(details: IProfileDetails) {
    this.details = details;
  }

  public getPayload() {
    return this.details.data;
  }

  public isAuthenticated() {
    return Promise.resolve<boolean>(this.details.success);
  }

  public isResourceOwner(resourceId: unknown) {
    return Promise.resolve<boolean>(resourceId === 1111);
  }

  public isInRole(role: string) {
    const data = this.details.data;
    return Promise.resolve<boolean>(data.roles.includes(role));
  }
}
