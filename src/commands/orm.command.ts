import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

import { Command } from 'commander';

import { getConnectionObject } from '@config';

const program = new Command();

program.option('-s', '--seed', 'data seeding');

program.parse(process.argv);

const options = program.opts();

if (options.s) {
  const basePath = path.resolve(process.cwd(), 'ormconfig.json');
  const databaseConnection = getConnectionObject();
  const seedConnection = {
    ...databaseConnection,
    entities: ['src/entities/*.ts'],
    seeds: ['src/orm/seeds/**/*.ts'],
    factories: ['src/orm/factories/**/*.ts'],
  };
  const jsonStr = JSON.stringify(seedConnection);

  if (!fs.existsSync(basePath)) {
    fs.writeFileSync(basePath, jsonStr, 'utf-8');
    exec('npm run db:seed');
  }

  if (fs.existsSync(basePath)) fs.unlinkSync(basePath);
}
