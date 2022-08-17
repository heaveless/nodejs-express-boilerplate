import { createTransport } from 'nodemailer';

export const mailerSetup = async () => {
  const configure = {
    service: process.env.MAILER_SERVICE,
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
  };

  return createTransport(configure);
};
