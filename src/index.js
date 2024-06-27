import { readFile } from './utils.js';
import comparer from './comparer.js';
import { parse } from './parsers.js';
import { extname } from 'path';
import outputController from './formatters/index.js';

const genDiff = (file1, file2, format) => {
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);

  const ext1 = extname(file1); // получаем формат расширения .json и тд.
  const ext2 = extname(file2);

  const parsedData1 = parse(fileContent1, ext1); // получаем объект
  const parsedData2 = parse(fileContent2, ext2);

  const comparedFiles = comparer(parsedData1, parsedData2); // сравниваем объект

  const resultDiff = outputController(comparedFiles, format);
  return resultDiff;
};

export default genDiff;
