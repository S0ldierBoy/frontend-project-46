import { readFile, parse } from './utils.js';
import compareFiles from './compareFiles.js';
import { toJsonString } from './dataOutput.js';

const genDiff = (file1, file2, format) => {
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);

  const parsedFile1 = parse(fileContent1);
  const parsedFile2 = parse(fileContent2);

  const comparedData = compareFiles(parsedFile1, parsedFile2);

  if (format === 'json') {
    return toJsonString(comparedData);
  }
};

export default genDiff;
