import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export type MailerType = Transporter<SMTPTransport.SentMessageInfo>;
