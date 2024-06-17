import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);

export const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');
