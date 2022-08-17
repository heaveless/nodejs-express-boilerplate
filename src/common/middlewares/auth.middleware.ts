import { statusCode } from '@common';
import * as express from 'express';
import { HttpContext, METADATA_KEY, Principal } from 'inversify-express-utils';

export const authMiddleware =
  (config: { role: string }) =>
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    console.log('aaaaaaaa');
    const httpContext: HttpContext = Reflect.getMetadata(
      METADATA_KEY.httpContext,
      req
    );

    const principal: Principal = httpContext.user;
    console.log(principal);
    // if (!principal.isInRole(config.role)) {
    //   res.sendStatus(statusCode.UNAUTHORIZED);
    //   return;
    // }
    next();
  };
