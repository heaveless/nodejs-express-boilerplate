import { IEnvironment } from '@config';
import { SendMailQuery } from '@entities';
import { provide } from 'inversify-binding-decorators';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { environment, mailerClient } from '@common';

@provide(MailerService)
export class MailerService {
  constructor(
    @mailerClient
    private mailerClient: Transporter<SMTPTransport.SentMessageInfo>,
    @environment private env: IEnvironment
  ) {}

  public async send(sendMailQuery: SendMailQuery) {
    const payload = {
      from: this.env.MAILER_USERNAME,
      to: sendMailQuery.to,
      subject: sendMailQuery.subject,
      html: sendMailQuery.body,
    };
    return await this.mailerClient.sendMail(payload);
  }
}
