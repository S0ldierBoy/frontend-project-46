import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFullPath = (filePath) => path.resolve(filePath);

export const readFile = (filename) => {
  const filePath = getFullPath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};
