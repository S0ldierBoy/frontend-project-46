import { readFile } from '../src/utils.js';
import genDiff from '../src/index.js';

let stylishExpected = readFile('expected_file.stylish.txt');
let plainExpected = readFile('expected_file.plain.txt');

// test('test for JSON format', () => {
//   const result = genDiff('file1.json', 'file2.json', 'json');
//   expect(result).toEqual(expected);
// });

test('test for plain formats ', () => {
  const result = genDiff('file1.yml', 'file2.yml', 'plain');
  expect(result).toEqual(plainExpected);
});

test('test for stylish formats ', () => {
  const result = genDiff('file1.yml', 'file2.yml', 'stylish');
  expect(result).toEqual(stylishExpected);
});
