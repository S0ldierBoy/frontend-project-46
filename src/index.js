import { getAbsolutePath, readFile } from './utils.js';
import parse from './parse.js';

const gendiff = (file1, file2, format) => {
  const fileContent1 = readFile(getAbsolutePath(file1));
  const fileContent2 = readFile(getAbsolutePath(file2));

  const result = parse(fileContent1, fileContent2);

  console.log(result);
};

const compareFiles = (content1, content2) => {
 
  return JSON.stringify(content1);
  
};

export default gendiff;
