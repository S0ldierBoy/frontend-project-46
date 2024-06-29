import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && value !== null) return '[complex value]';
  return typeof value === 'string' ? `'${value}'` : String(value);
};

const formatPlain = (data, path = '') => data
  .reduce((acc, item) => {
    const newPath = path ? `${path}.${item.key}` : item.key;

    let updatedAcc = acc; // Используем let для обновления ссылки на массив

    if (item.type === 'nested') {
      updatedAcc = updatedAcc.concat(formatPlain(item.children, newPath));
    } else if (item.type === 'added') {
      const formattedValue = formatValue(item.value);
      updatedAcc = updatedAcc.concat(
        `Property '${newPath}' was added with value: ${formattedValue}`,
      );
    } else if (item.type === 'removed') {
      updatedAcc = updatedAcc.concat(`Property '${newPath}' was removed`);
    } else if (item.type === 'changed') {
      const oldValue = formatValue(item.oldValue);
      const newValue = formatValue(item.newValue);
      updatedAcc = updatedAcc.concat(
        `Property '${newPath}' was updated. From ${oldValue} to ${newValue}`,
      );
    }

    return updatedAcc;
  }, [])
  .join('\n');

export default formatPlain;
