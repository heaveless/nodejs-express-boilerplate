import { Default } from '@entities';
import { Repository } from 'typeorm';

export interface RespositoryDependency<T> {
  findAll(): Promise<T[]>;
}

export type DefaultRepositoryInterface = Repository<Default>;
