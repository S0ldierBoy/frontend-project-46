import renderDiff from './stylish.js';

const outputController = (data, format) => {
  switch (format) {
    case 'stylish':
      return renderDiff(data);
    case 'plain':
      return 'x';
    case 'json':
      return 'j';
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

export default outputController;
