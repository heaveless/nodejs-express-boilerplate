import { TYPES } from '@common';
import { inject } from 'inversify';

export const dbClient = inject(TYPES.DbClient);
