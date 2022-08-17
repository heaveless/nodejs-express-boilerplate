import { TYPES } from '../constants';
import { inject } from 'inversify';

export const environment = inject(TYPES.Environment);
export const dbClient = inject(TYPES.DbClient);
export const mailerClient = inject(TYPES.MailerClient);
export const redisClient = inject(TYPES.RedisClient);
