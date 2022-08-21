import { Type } from '@experimentallife/common';

export interface ConfigOptions {
  host: string;
  port: number;
  name: string;
  profiles: string[];
  username?: string;
  password?: string;
}

export interface ConfigOptionsFactory {
  createConfigOptions(): Promise<ConfigOptions>;
}

export interface ConfigAsyncOptions {
  useClass: Type<ConfigOptionsFactory>;
}
