import renderDiff from './stylish.js';
import formatPlain from './plain.js';

const outputController = (data, format) => {
  switch (format) {
    case 'stylish':
      return renderDiff(data);
    case 'plain':
      return formatPlain(data);
    // case 'json':
    //   return 'j';
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

export default outputController;
