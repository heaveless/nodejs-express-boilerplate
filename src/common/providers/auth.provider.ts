import * as _ from 'lodash';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { IProfileDetails, Profile } from '@common';
import { injectable } from 'inversify';
import { interfaces, Principal } from 'inversify-express-utils';
import { Global } from '@config';

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
  async getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Principal> {
    const token: string = req.headers['authorization'] as string;
    let payload: IProfileDetails = {
      data: undefined as any,
      success: false,
    };

    jwt.verify(token, Global.SECURITY_PRIVATE_KEY, (err, decoded) => {
      if (err) return new Profile(_.assign(payload, { message: err.message }));
      _.assign(payload, { data: decoded, success: true });
    });

    return new Profile(payload);
  }
}
