import { Profile, statusCode } from '@common';
import * as express from 'express';
import { HttpContext, METADATA_KEY } from 'inversify-express-utils';

export const authMiddleware =
  (config: { role: string }) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    const httpContext: HttpContext = Reflect.getMetadata(
      METADATA_KEY.httpContext,
      req
    );

    const profile = httpContext.user as Profile;

    const isAuthenticated = await profile.isAuthenticated();
    if (!isAuthenticated) {
      res.status(statusCode.UNAUTHORIZED);
      res.send(profile.details.message);
      return;
    }

    const isInRole = await profile.isInRole(config.role);
    if (!isInRole) {
      res.status(statusCode.UNAUTHORIZED);
      res.send(profile.details.message);
      return;
    }
    next();
  };
