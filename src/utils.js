import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename);
};

export const readFile = (filename) => {
  const fullPath = getFixturePath(filename);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    console.error(`Ошибка при чтении файла ${fullPath}: ${error.message}`);
    throw error;
  }
};
