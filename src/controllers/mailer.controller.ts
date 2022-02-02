import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  response,
  requestBody,
  httpPost,
} from 'inversify-express-utils';
import { MailerService } from '@services';
import { ApiOperationPost, ApiPath } from 'swagger-express-ts';
import { SendMailQuery } from '@entities';

@ApiPath({ path: '/mailer', name: 'Mailer' })
@controller('/mailer')
export class MailerController {
  constructor(
    @inject(MailerService)
    private mailerService: MailerService
  ) {}

  @ApiOperationPost({
    path: '/send',
    parameters: {
      body: {
        required: true,
        model: 'SendMailQuery',
      },
    },
    responses: {
      200: {
        description: 'Success',
      },
    },
  })
  @httpPost('/send')
  public async send(
    @requestBody() sendMailQuery: SendMailQuery,
    @response() res: Response
  ) {
    try {
      return await this.mailerService.send(sendMailQuery);
    } catch (e: any) {
      res.status(500);
      res.send(e.message);
    }
  }
}
