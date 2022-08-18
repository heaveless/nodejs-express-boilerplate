import path from 'path';

import * as express from 'express';
import * as swagger from 'swagger-express-ts';
import metadata from './metadata.json';

export const swaggerSetup = async (app: express.Application) => {
  app.use(
    '/api-docs/swagger',
    express.static(path.join(__dirname, '../swagger'))
  );
  app.use(
    '/api-docs/swagger/assets',
    express.static('node_modules/swagger-ui-dist')
  );
  app.use(
    swagger.express({
      definition: {
        info: {
          title: metadata.title,
          version: metadata.version,
        },
        securityDefinitions: {
          Authorization: {
            type: 'apiKey',
            name: 'authorization',
            in: 'header',
          },
        },
      },
    })
  );
};
