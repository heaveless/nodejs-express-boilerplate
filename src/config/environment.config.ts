export const Global = {
  PORT: Number(process.env.PORT),
  SECURITY_SECRET_KEY: process.env.SECURITY_SECRET_KEY as string,
};

export interface IEnvironment {
  MAILER_USERNAME: string;
  SECURITY_SECRET_KEY: string;
}

export const Environment: IEnvironment = {
  MAILER_USERNAME: process.env.MAILER_USERNAME as string,
  SECURITY_SECRET_KEY: Global.SECURITY_SECRET_KEY,
};
