import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const getFixturePath = (filename) => {
  const fullPath = path.join(__dirname, '..', '__fixtures__', filename);
  return fullPath;
};

export const readFile = (filename) => {
  const filePath = getFixturePath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};
