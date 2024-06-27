import _ from 'lodash';

const formatValue = (value, depth) => {
  if (_.isObject(value) && !Array.isArray(value)) {
    const indentSize = 4;
    const indent = ' '.repeat(depth * indentSize);
    const bracketIndent = ' '.repeat((depth - 1) * indentSize);

    const lines = _.keys(value)
      .sort()
      .map((key) => {
        const val = value[key];
        return `${indent}${key}: ${formatValue(val, depth + 1)}`;
      });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  }
  return value;
};

const renderDiff = (tree, depth = 1) => {
  const indentSize = 4;
  const indent = ' '.repeat(depth * indentSize - 2);
  const bracketIndent = ' '.repeat((depth - 1) * indentSize);

  const lines = tree.map((node) => {
    switch (node.type) {
      case 'nested':
        return `${indent}  ${node.key}: ${renderDiff(
          node.children,
          depth + 1
        )}`;
      case 'added':
        return `${indent}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed':
        return `${indent}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'changed':
        return [
          `${indent}- ${node.key}: ${formatValue(node.oldValue, depth + 1)}`,
          `${indent}+ ${node.key}: ${formatValue(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'unchanged':
        return `${indent}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

export default renderDiff;
