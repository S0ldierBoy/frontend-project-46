import _ from 'lodash';

const compareFiles = (obj1, obj2) => {
  const allKeys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(allKeys);
  const symbols = { empty: ' ', plus: '+', minus: '-' };
  const result = [];

  sortedKeys.forEach((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      result.push(...compareFiles(value1, value2));
    }

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

// const data1 = {
//   common: {
//     setting1: 'Value 1',
//     setting2: 200,
//     setting3: true,
//     setting6: {
//       key: 'value',
//       doge: {
//         wow: '',
//       },
//     },
//   },
//   group1: {
//     baz: 'bas',
//     foo: 'bar',
//     nest: {
//       key: 'value',
//     },
//   },
//   group2: {
//     abc: 12345,
//     deep: {
//       id: 45,
//     },
//   },
// };

// const data2 = {
//   common: {
//     follow: false,
//     setting1: 'Value 1',
//     setting3: null,
//     setting4: 'blah blah',
//     setting5: {
//       key5: 'value5',
//     },
//     setting6: {
//       key: 'value',
//       ops: 'vops',
//       doge: {
//         wow: 'so much',
//       },
//     },
//   },
//   group1: {
//     foo: 'bar',
//     baz: 'bars',
//     nest: 'str',
//   },
//   group3: {
//     deep: {
//       id: {
//         number: 45,
//       },
//     },
//     fee: 100500,
//   },
// };

// console.log(compareFiles(data1, data2));
