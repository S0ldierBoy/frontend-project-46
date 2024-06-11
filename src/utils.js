import path from 'path';
import fs from 'fs';

export const getAbsolutePath = (file) => {
  const absolutePath = path.resolve(process.cwd(), '__fixtures__', file);
  return absolutePath;
};

export const readFile = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  return file;
};
