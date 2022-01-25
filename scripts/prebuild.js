const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const REGEX_FILE = '^.*.env$';
const CONF_FILE = 'prebuild.json';

const readdirRecursSync = (dir, filelist) => {
  filelist = filelist || [];

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    file = path.join(dir, file);

    if (fs.statSync(file).isDirectory()) {
      filelist = readdirRecursSync(file, filelist);
    } else {
      filelist.push(file);
    }
  });

  return filelist;
}

const run = () => {
  const basePath = path.resolve(process.cwd());
  const configFile = path.join(basePath, CONF_FILE);

  const configContent = fs.readFileSync(configFile);
  if (configContent) {
    const { environments } = JSON.parse(configContent);

    if (!environments)
      throw new Error('configuration file or folder not found!');

    const envPaths = environments.reduce((acc, curr) => {
      if (curr.match(REGEX_FILE)) {
        acc.push(path.join(basePath, curr));
        return acc;
      }

      const filtered = readdirRecursSync(path.join(basePath, curr)).filter(
        (f) => f.match(REGEX_FILE)
      );

      return [...acc, ...filtered];
    }, []);

    envPaths.forEach((pathFile) => dotenv.config({ path: pathFile }));
  }
};

run();
