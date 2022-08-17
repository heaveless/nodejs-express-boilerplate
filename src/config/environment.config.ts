export interface IEnvironment {
  PORT: number;
  MAILER_USERNAME: string;
  MAILER_PASSWORD: string;
}

export const Environment: IEnvironment = {
  PORT: Number(process.env.PORT),
  MAILER_USERNAME: process.env.MAILER_USERNAME as string,
  MAILER_PASSWORD: process.env.MAILER_PASSWORD as string,
};
