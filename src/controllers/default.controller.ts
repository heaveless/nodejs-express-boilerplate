import { Response } from 'express';
import { inject } from 'inversify';
import { controller, response, httpGet } from 'inversify-express-utils';
import { DefaultService } from '@services';
import {
  ApiOperationGet,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';

@ApiPath({ path: '/default', name: 'Default' })
@controller('/default')
export class DefaultController {
  constructor(
    @inject(DefaultService)
    private defaultService: DefaultService
  ) {}

  @httpGet('/')
  public async get(@response() res: Response) {
    try {
      return await this.defaultService.index();
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }

  @ApiOperationGet({
    path: '/all',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: 'Default',
      },
    },
  })
  @httpGet('/all')
  public async getAll(@response() res: Response) {
    try {
      return await this.defaultService.getAll();
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
