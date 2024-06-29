import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && value !== null) return '[complex value]';
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const formatPlain = (data, path = '') => data.reduce((acc, item) => {
  const newPath = path ? `${path}.${item.key}` : item.key;

  if (item.type === 'nested') {
    return acc.concat(formatPlain(item.children, newPath));
  }
  if (item.type === 'added') {
    const formattedValue = formatValue(item.value);
    return acc.concat(`Property '${newPath}' was added with value: ${formattedValue}`);
  }
  if (item.type === 'removed') {
    return acc.concat(`Property '${newPath}' was removed`);
  }
  if (item.type === 'changed') {
    const oldValue = formatValue(item.oldValue);
    const newValue = formatValue(item.newValue);
    return acc.concat(`Property '${newPath}' was updated. From ${oldValue} to ${newValue}`);
  }

  return acc; // в случае 'unchanged' просто возвращаем acc без изменений
}, []).join('\n');

export default formatPlain;
