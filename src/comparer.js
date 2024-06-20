import _ from 'lodash';

const comparer = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2)).sort();

  return keys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (
      _.isObject(value1) &&
      _.isObject(value2) &&
      !Array.isArray(value1) &&
      !Array.isArray(value2)
    ) {
      return { key, type: 'nested', children: comparer(value1, value2) };
    }
    if (!obj1.hasOwnProperty(key)) {
      return { key, type: 'added', value: value2 };
    }
    if (!obj2.hasOwnProperty(key)) {
      return { key, type: 'removed', value: value1 };
    }
    if (!_.isEqual(value1, value2)) {
      return { key, type: 'changed', oldValue: value1, newValue: value2 };
    }
    return { key, type: 'unchanged', value: value1 };
  });
};

export default comparer;
