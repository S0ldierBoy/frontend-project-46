import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getFixturePath = (filename) => {
  return path.join(__dirname, '..', filename);
};

export const readFile = (filename) => {
  const filePath = getFixturePath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};
