import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getFixturePath = (filename) => {
  const paths = path.join(__dirname, '..', '__fixtures__', filename);
  return paths
};

export const readFile = (filename) => {
  const filePath = getFixturePath(filename);
  const file = fs.readFileSync(filePath, 'utf-8');
  return file
};
