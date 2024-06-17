import { readFile } from './utils.js';
import compareFiles from './compareFiles.js';
import { toString } from './dataOutput.js';
import { jsonParser, yamlParser } from './parsers.js';

const genDiff = (file1, file2, format) => {
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);

  const parsedJsonFile1 = jsonParser(fileContent1);
  const parsedJsonFile2 = jsonParser(fileContent2);

  const parsedYmlFile1 = yamlParser(fileContent1);
  const parsedYmlFile2 = yamlParser(fileContent2);

  if (format === 'json') {
    return toString(compareFiles(parsedJsonFile1, parsedJsonFile2));
  } else if (format === 'yml' || 'yaml') {
    return toString(compareFiles(parsedYmlFile1, parsedYmlFile2));
  }
};

export default genDiff;
