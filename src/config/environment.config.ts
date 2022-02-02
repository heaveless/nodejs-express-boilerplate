export interface IEnvironment {
  PORT: number;
  MAILER_USERNAME: string;
}

export const Environment: IEnvironment = {
  PORT: Number(process.env.PORT) || 3000,
  MAILER_USERNAME: process.env.MAILER_USERNAME || '',
};
