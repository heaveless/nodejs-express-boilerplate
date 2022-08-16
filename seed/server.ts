import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const databaseConnection = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: ['src/entities/*.ts'],
};

const runApp = async () => {
  const basePath = path.resolve(process.cwd(), 'ormconfig.json');
  const jsonStr = JSON.stringify(databaseConnection);

  if (!fs.existsSync(basePath)) fs.writeFileSync(basePath, jsonStr, 'utf-8');

  exec('npm run orm:seed', (error: any, stdout: string, stderr: string) => {
    if (!error) {
      console.log(`🌱 seeding ✔ ${stdout}`);
      console.log(`🌱 seeding ✘ ${stderr}`);
    } else console.error(`🌱 seeding ❌: ${error}`);
  });
};

// runApp();
