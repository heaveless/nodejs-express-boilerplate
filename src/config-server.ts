import * as cloudClient from 'cloud-config-client';
import { server as configMap } from './config/metadata.json';

export const configServer = async () => {
  const configure = {
    endpoint: process.env.CONFIG_SERVER_ENDPOINT as string,
    name: process.env.CONFIG_SERVER_NAME as string,
    profiles: [process.env.CONFIG_SERVER_PROFILE as string],
  };

  const config = await cloudClient.load(configure);

  configMap.map(({ key, ref }) => (process.env[key] = config.get(ref)));
};
