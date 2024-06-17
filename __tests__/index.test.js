import { readFile } from '../src/utils.js';
import genDiff from '../src/index.js';

let expected = readFile('expected_file.json.txt');

test('genDiff compares two JSON files correctly', () => {
  const result = genDiff('file1.json', 'file2.json', 'json');
  expect(result).toEqual(expected);
});
