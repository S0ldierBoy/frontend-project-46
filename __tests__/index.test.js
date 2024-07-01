import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFixture = (filename) => {
  const filePath = getFixturePath(filename);
  return fs.readFileSync(filePath, 'utf-8');
};

const expectedResults = {
  stylish: readFixture('expectedStylish.txt'),
  plain: readFixture('expectedPlain.txt'),
  json: readFixture('expectedJson.txt'),
};

const testCases = [
  ['JSON format', 'file1.json', 'file2.json', 'json'],
  ['plain format', 'file1.yml', 'file2.yml', 'plain'],
  ['stylish format', 'file1.yml', 'file2.yml', 'stylish'],
];

describe('genDiff function', () => {
  test.each(testCases)(
    'should generate correct diff for %s',
    (_, file1, file2, format) => {
      const filepath1 = getFixturePath(file1);
      const filepath2 = getFixturePath(file2);
      const result = genDiff(filepath1, filepath2, format);
      expect(result).toEqual(expectedResults[format]);
    },
  );
});
