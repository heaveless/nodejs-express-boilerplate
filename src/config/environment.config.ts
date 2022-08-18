export const Global = {
  PORT: Number(process.env.PORT),
  SECURITY_PRIVATE_KEY: process.env.SECURITY_PRIVATE_KEY as string,
};

export interface IEnvironment {
  MAILER_USERNAME: string;
  SECURITY_PRIVATE_KEY: string;
}

export const Environment: IEnvironment = {
  MAILER_USERNAME: process.env.MAILER_USERNAME as string,
  SECURITY_PRIVATE_KEY: Global.SECURITY_PRIVATE_KEY,
};
