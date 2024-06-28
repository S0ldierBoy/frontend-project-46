import path from 'path';
import fs from 'fs';

const getFullPath = (filePath) => path.resolve(filePath);

export const readFile = (filename) => {
  const filePath = getFullPath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};
