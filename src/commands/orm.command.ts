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
    entities: ['src/entities/models/*.ts'],
    seeds: ['src/orm/seeds/**/*.ts'],
    factories: ['src/orm/factories/**/*.ts'],
  };
  const jsonStr = JSON.stringify(seedConnection);

  if (!fs.existsSync(basePath)) {
    fs.writeFileSync(basePath, jsonStr, 'utf-8');
    exec('yarn db:seed', (error: any, stdout: string, stderr: string) => {
      if (!error) {
        console.log(`🌱 seeding ✔ ${stdout}`);
        console.log(`🌱 seeding ✘ ${stderr}`);

        if (fs.existsSync(basePath)) fs.unlinkSync(basePath);
        return;
      }
      console.error(`🌱 seeding ❌: ${error}`);
    });
  }
}
