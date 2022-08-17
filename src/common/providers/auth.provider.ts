import { Profile } from '@common';
import * as express from 'express';
import { injectable } from 'inversify';
import { interfaces, Principal } from 'inversify-express-utils';

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
  async getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Principal> {
    let accessTokenFromClient = req.headers['x-auth-token'];
    console.log(accessTokenFromClient);
    return new Profile({ aa: accessTokenFromClient });
  }
}
