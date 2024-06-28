import { readFile } from './src/utils.js';
import comparer from './src/comparer.js';
import { parse } from './src/parsers.js';
import { extname } from 'path';
import outputController from './src/formatters/index.js';

const genDiff = (file1, file2, format) => {
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);

  const ext1 = extname(file1);
  const ext2 = extname(file2);

  const parsedData1 = parse(fileContent1, ext1);
  const parsedData2 = parse(fileContent2, ext2);

  const comparedFiles = comparer(parsedData1, parsedData2);

  const resultDiff = outputController(comparedFiles, format);
  return resultDiff;
};

export default genDiff;
