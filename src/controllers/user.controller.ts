import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  response,
  httpGet,
  requestParam,
  requestBody,
  httpPost,
} from 'inversify-express-utils';
import { UserService } from '@services';
import {
  ApiOperationGet,
  ApiOperationPost,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import { FindUserQuery } from '@entities';

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
  public async getById(
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

  @ApiOperationPost({
    path: '/find',
    parameters: {
      body: {
        required: true,
        model: 'FindUserQuery',
      },
    },
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'User',
      },
    },
  })
  @httpPost('/find')
  public async getOne(
    @requestBody() req: FindUserQuery,
    @response() res: Response
  ) {
    try {
      return await this.userService.getOne(req);
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
