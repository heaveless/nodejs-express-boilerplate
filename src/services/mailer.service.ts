import { IEnvironment } from '@config';
import { EmailDto } from '@entities';
import { provide } from 'inversify-binding-decorators';
import { environment, mailerClient, MailerType } from '@common';

@provide(MailerService)
export class MailerService {
  constructor(
    @mailerClient
    private mailerClient: MailerType,
    @environment
    private env: IEnvironment
  ) {}

  public async send(dto: EmailDto) {
    const payload = {
      from: this.env.MAILER_USERNAME,
      to: dto.to,
      subject: dto.subject,
      html: dto.body,
    };
    return await this.mailerClient.sendMail(payload);
  }
}
