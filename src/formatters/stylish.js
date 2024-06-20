import _ from 'lodash';

const renderDiff = (tree, depth = 1) => {
  const indent = ' '.repeat(depth * 1);
  const bracketIndent = ' '.repeat((depth - 1) * 2);

  const lines = tree.map((node) => {
    switch (node.type) {
      case 'nested': // есть вложенные объекты
        return `${indent}${node.key}: ${renderDiff(node.children, depth + 1)}`;
      case 'added': // присутствует только в дата2
        return `${indent}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed': // присутствует только в дата1
        return `${indent}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'changed': // есть во всех датах, но разные значения
        return [
          `${indent}- ${node.key}: ${formatValue(node.oldValue, depth + 1)}`,
          `${indent}+ ${node.key}: ${formatValue(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'unchanged': // есть во всех датах значения одинаковы
        return `${indent}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const formatValue = (value, depth) => {
  if (_.isObject(value) && !Array.isArray(value)) {
    const indent = ' '.repeat(depth * 2);
    const bracketIndent = ' '.repeat((depth - 1) * 2);

    const lines = _.keys(value)
      .sort()
      .map((key) => {
        const val = value[key];
        return `${indent}  ${key}: ${formatValue(val, depth + 1)}`;
      });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  }
  return value;
};

export default renderDiff;
