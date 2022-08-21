import {
  ConfigModule,
  ConfigOptions,
  ConfigOptionsFactory,
} from '@experimentallife/config';

class ConfigConfiguration implements ConfigOptionsFactory {
  createConfigOptions(): Promise<ConfigOptions> {
    return Promise.resolve({
      host: process.env.CONFIG_HOST as string,
      port: Number(process.env.CONFIG_PORT),
      name: process.env.CONFIG_NAME as string,
      profiles: ['development'],
    });
  }
}

export const ConfigConfigModule = ConfigModule.registerAsync({
  useClass: ConfigConfiguration,
});
