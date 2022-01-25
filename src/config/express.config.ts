import bodyParser from 'body-parser';
import * as express from 'express';

export const expressSetup = async (app: express.Application) => {
  app.use(bodyParser.json());
  app.get('/', (_, res: express.Response) => res.redirect('/api-docs/swagger'));
};
