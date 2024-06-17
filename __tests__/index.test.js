import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

let expected = readFile(getFixturePath('expected_file.json.txt'));

test('genDiff compares two JSON files correctly', () => {
  const firstPath = getFixturePath('file1.json');
  const secondPath = getFixturePath('file2.json');
  const result = genDiff(firstPath, secondPath, 'json');
  expect(result).toEqual(expected);
});
