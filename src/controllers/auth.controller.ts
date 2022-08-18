import * as jwt from 'jsonwebtoken';
import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  response,
  requestHeaders,
} from 'inversify-express-utils';
import {
  ApiOperationGet,
  ApiPath,
  SwaggerDefinitionConstant,
} from 'swagger-express-ts';
import { environment } from '@common';
import { IEnvironment } from '@config';

@ApiPath({ path: '/auth', name: 'Authorization' })
@controller('/auth')
export class AuthController {
  constructor(
    @environment
    private env: IEnvironment
  ) {}

  @ApiOperationGet({
    path: '/',
    responses: {
      200: {
        description: 'Success',
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
      },
    },
  })
  @httpGet('/')
  public async login(
    @requestHeaders('cipher') cipher: string,
    @response() res: Response
  ) {
    try {
      console.log(cipher);
      const token = jwt.sign(
        { foo: 'bar', roles: ['ALL'] },
        this.env.SECURITY_SECRET_KEY
      );
      return { token };
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
