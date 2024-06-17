import yaml from 'js-yaml';

export const yamlParser = (file) => {
  return yaml.load(file);
};

export const jsonParser = (file) => {
  return JSON.parse(file);
};
