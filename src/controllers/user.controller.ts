import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  response,
  httpGet,
  requestParam,
} from 'inversify-express-utils';
import { UserService } from '@services';
import {
  ApiOperationGet,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';

@ApiPath({ path: '/user', name: 'User' })
@controller('/user')
export class UserController {
  constructor(
    @inject(UserService)
    private userService: UserService
  ) {}

  @ApiOperationGet({
    path: '/:id',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'User',
      },
    },
  })
  @httpGet('/:id')
  public async getOne(
    @requestParam('id') id: string,
    @response() res: Response
  ) {
    try {
      return await this.userService.getById(id);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }

  @ApiOperationGet({
    path: '/',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.ARRAY,
        model: 'User',
      },
    },
  })
  @httpGet('/')
  public async getAll(@response() res: Response) {
    try {
      return await this.userService.getAll();
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
