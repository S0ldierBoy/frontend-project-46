import _ from 'lodash';

const getIndent = (depth, spaceCount = 4, withSign = false) => {
  const baseIndent = ' '.repeat(depth * spaceCount);
  return withSign ? baseIndent.slice(2) : baseIndent;
};

const getBracketIndent = (depth, spaceCount = 4) => ' '.repeat((depth - 1) * spaceCount);

const formatValue = (value, depth) => {
  if (_.isObject(value) && !Array.isArray(value)) {
    const indent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const lines = _.sortBy(_.keys(value))
      .map((key) => {
        const val = value[key];
        return `${indent}${key}: ${formatValue(val, depth + 1)}`;
      });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  }
  return value;
};

const renderDiff = (tree, depth = 1) => {
  const indent = getIndent(depth, 4, true);
  const bracketIndent = getBracketIndent(depth);

  const lines = tree.map((node) => {
    switch (node.type) {
      case 'nested':
        return `${indent}  ${node.key}: ${renderDiff(
          node.children,
          depth + 1,
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
