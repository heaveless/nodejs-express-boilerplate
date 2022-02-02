import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const getMailerConnection = async () => {
  const mailerConnection = {
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  };

  const connection: Transporter<SMTPTransport.SentMessageInfo> =
    createTransport(mailerConnection);
  return connection;
};
