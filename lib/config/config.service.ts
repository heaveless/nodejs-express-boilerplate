import { inject, injectable } from 'inversify';
import * as client from 'cloud-config-client';
import { CONFIG_OPTIONS_TOKEN } from './config.constants';
import { ConfigOptions } from './config.interfaces';

@injectable()
export class ConfigService {
  constructor(
    @inject(CONFIG_OPTIONS_TOKEN) private readonly options: ConfigOptions
  ) {}

  private async load() {
    return await client.load(this.options);
  }

  async get<T>(keyParts: string): Promise<T> {
    const config = await this.load();
    return Promise.resolve(config.get(keyParts));
  }

  async helloworld() {
    return 'hello wold';
  }
}
