import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Изменено здесь
      },
    },
  },
  pluginJs.configs.recommended,
];
