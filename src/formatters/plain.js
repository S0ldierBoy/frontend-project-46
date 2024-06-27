import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && value !== null) return '[complex value]';
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const formatPlain = (data, path = '') => {
  return data
    .reduce((result, item) => {
      const newPath = path ? `${path}.${item.key}` : item.key;

      if (item.type === 'nested') {
        result = result.concat(formatPlain(item.children, newPath));
      } else if (item.type === 'added') {
        const value = formatValue(item.value);
        result.push(`Property '${newPath}' was added with value: ${value}`);
      } else if (item.type === 'removed') {
        result.push(`Property '${newPath}' was removed`);
      } else if (item.type === 'changed') {
        const oldValue = formatValue(item.oldValue);
        const newValue = formatValue(item.newValue);
        result.push(
          `Property '${newPath}' was updated. From ${oldValue} to ${newValue}`
        );
      }
      return result;
    }, [])
    .join('\n');
};

export default formatPlain;
