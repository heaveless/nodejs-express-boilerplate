import { inject } from 'inversify';
import { EntityClassOrSchema } from './database.types';
import { getRepositoryToken } from './database.utils';

export const injectRepository = (entity: EntityClassOrSchema) =>
  inject(getRepositoryToken(entity));
