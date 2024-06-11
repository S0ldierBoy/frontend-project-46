const parse = (file1, file2, format) => {
  const parsedContent1 = JSON.parse(file1);
  const parsedContent2 = JSON.parse(file2);
  return { parsedContent1, parsedContent2 };
};
export default parse;
