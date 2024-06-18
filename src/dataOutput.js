export const toString = (arr) => {
  const result = arr
    .flatMap(({ key, value, symbol }) => `  ${symbol} ${key}: ${value}`)
    .join('\n');

  return `{\n${result}\n}`;
};
