import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  response,
  httpGet,
  requestParam,
  requestBody,
  httpPost,
  httpPut,
  httpDelete,
} from 'inversify-express-utils';
import { UserService } from '@services';
import {
  ApiOperationDelete,
  ApiOperationGet,
  ApiOperationPost,
  ApiOperationPut,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import { UserDto } from '@entities';
import { auth, authMiddleware } from '@common';

@ApiPath({ path: '/users', name: 'User' })
@controller('/users')
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
      return await this.userService.getOne(id);
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
  @httpGet('/', authMiddleware({ role: 'ALL' }))
  public async getMany(@response() res: Response) {
    try {
      return await this.userService.getMany();
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }

  @ApiOperationPost({
    path: '/',
    parameters: {
      body: {
        required: true,
        model: 'UserDto',
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
  @httpPost('/')
  public async create(@requestBody() req: UserDto, @response() res: Response) {
    try {
      return await this.userService.create(req);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }

  @ApiOperationPut({
    path: '/',
    parameters: {
      body: {
        required: true,
        model: 'UserDto',
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
  @httpPut('/')
  public async update(@requestBody() req: UserDto, @response() res: Response) {
    try {
      return await this.userService.update(req);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }

  @ApiOperationDelete({
    path: '/:id',
    parameters: {},
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'User',
      },
    },
  })
  @httpDelete('/:id')
  public async delete(
    @requestParam('id') id: string,
    @response() res: Response
  ) {
    try {
      return await this.userService.delete(id);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
