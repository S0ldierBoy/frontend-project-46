export const toJsonString = (arr) => {
  const result = arr
    .map(({ key, value, symbol }) => `  ${symbol} ${key}: ${value}`)
    .join('\n');

  return `{\n${result}\n}`;
};
