import { EntitySchema } from 'typeorm';
import { DATABASE_ENTITY_TOKEN } from './database.constants';
import { EntityClassOrSchema } from './database.types';

export function getRepositoryToken(entity: EntityClassOrSchema) {
  const entityPrefix =
    entity instanceof EntitySchema ? entity.options.name : entity.name;
  return `${
    DATABASE_ENTITY_TOKEN.description
  }_${entityPrefix.toString()}_REPOSITORY`;
}
