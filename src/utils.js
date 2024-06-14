import path from 'path';
import fs from 'fs';

export const readFile = (filePath) => {
  const dirName = process.cwd();
  const fullPath = path.resolve(dirName, filePath);
  return fs.readFileSync(fullPath, 'utf-8');
};

export const parse = (file) => {
  return JSON.parse(file);
};

