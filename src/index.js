import { readFile } from './utils.js';
import compareFiles from './compareFiles.js';
import { toString } from './dataOutput.js';
import { parse } from './parsers.js';
import { extname } from 'path';

const genDiff = (file1, file2, format = 'stylish') => {
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);

  const ext1 = extname(file1); // получаем формат расширения .json и тд.
  const ext2 = extname(file2);

  const parsedData1 = parse(fileContent1, ext1);
  const parsedData2 = parse(fileContent2, ext2);

  const comparedFiles = compareFiles(parsedData1, parsedData2);

  const result = toString(comparedFiles);
  return result;
};

export default genDiff;
