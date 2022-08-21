import { Type } from '@experimentallife/common';
import { AsyncContainerModule, interfaces } from 'inversify';
import { CONFIG_OPTIONS_TOKEN, CONFIG_SERVICE_TOKEN } from './config.constants';
import {
  ConfigAsyncOptions,
  ConfigOptions,
  ConfigOptionsFactory,
} from './config.interfaces';
import { ConfigService } from './config.service';

export class ConfigModule {
  static async registerAsync(options: ConfigAsyncOptions) {
    const provide = await this.createAsyncOptionsProvider(options.useClass);

    return new AsyncContainerModule(
      async (bind: interfaces.Bind, _: interfaces.Unbind) => {
        bind<ConfigOptions>(CONFIG_OPTIONS_TOKEN).toConstantValue(provide);
        bind<ConfigService>(CONFIG_SERVICE_TOKEN).to(ConfigService);
      }
    );
  }

  private static async createAsyncOptionsProvider(
    options: Type<ConfigOptionsFactory>
  ) {
    const instance = new options();
    return await instance.createConfigOptions();
  }
}
