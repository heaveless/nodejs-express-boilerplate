import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { User } from '@entities';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, _: Connection): Promise<void> {
    await factory(User)().createMany(25);
  }
}
