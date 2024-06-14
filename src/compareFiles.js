import _ from 'lodash';

const compareFiles = (obj1, obj2) => {
  const allKeys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(allKeys);
  const symbols = { empty: ' ', plus: '+', minus: '-' };
  const result = [];

  sortedKeys.forEach((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (value1 === value2) {
        result.push({ key: key, value: value1, symbol: symbols.empty });
      } else {
        result.push({ key: key, value: value1, symbol: symbols.minus });
        result.push({ key: key, value: value2, symbol: symbols.plus });
      }
    } else if (_.has(obj1, key)) {
      result.push({ key: key, value: value1, symbol: symbols.minus });
    } else if (_.has(obj2, key)) {
      result.push({ key: key, value: value2, symbol: symbols.plus });
    }
  });
  return result;
};

export default compareFiles;

