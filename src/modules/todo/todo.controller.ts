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
import { TodoService } from './todo.service';
import {
  ApiOperationDelete,
  ApiOperationGet,
  ApiOperationPost,
  ApiOperationPut,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import { TodoDto } from './todo.entity';
// import { authMiddleware } from '@common';

@ApiPath({ path: '/todos', name: 'Todo', security: { basicAuth: [] } })
@controller('/todos')
export class TodoController {
  constructor(
    @inject(TodoService)
    private todoService: TodoService
  ) {}

  @ApiOperationGet({
    path: '/:id',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'Todo',
      },
    },
  })
  @httpGet('/:id')
  public async getOne(
    @requestParam('id') id: string,
    @response() res: Response
  ) {
    try {
      return await this.todoService.getOne(id);
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
        model: 'Todo',
      },
    },
  })
  @httpGet('/')
  public async getMany(@response() res: Response) {
    try {
      return await this.todoService.getMany();
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
        model: 'TodoDto',
      },
    },
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'Todo',
      },
    },
  })
  @httpPost('/')
  public async create(@requestBody() req: TodoDto, @response() res: Response) {
    try {
      return await this.todoService.create(req);
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
        model: 'TodoDto',
      },
    },
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
        model: 'Todo',
      },
    },
  })
  @httpPut('/')
  public async update(@requestBody() req: TodoDto, @response() res: Response) {
    try {
      return await this.todoService.update(req);
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
        model: 'Todo',
      },
    },
  })
  @httpDelete('/:id')
  public async delete(
    @requestParam('id') id: string,
    @response() res: Response
  ) {
    try {
      return await this.todoService.delete(id);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
