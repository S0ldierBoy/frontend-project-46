import { readFile } from '../src/utils.js';
import genDiff from '../index.js';

const expectedResults = {
  stylish: readFile('expected_file.stylish.txt'),
  plain: readFile('expected_file.plain.txt'),
  json: readFile('expected_file.json.txt'),
};

const testCases = [
  ['JSON format', 'file1.json', 'file2.json', 'json'],
  ['plain format', 'file1.yml', 'file2.yml', 'plain'],
  ['stylish format', 'file1.yml', 'file2.yml', 'stylish'],
];

describe('genDiff function', () => {
  test.each(testCases)('test for %s', (_, file1, file2, format) => {
    const result = genDiff(file1, file2, format);
    expect(result).toEqual(expectedResults[format]);
  });
});
