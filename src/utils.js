import path from 'path';
import fs from 'fs';

const getFullPath = (filePath) => path.resolve(filePath);

const readFile = (filename) => {
  const filePath = getFullPath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};

export default readFile;
