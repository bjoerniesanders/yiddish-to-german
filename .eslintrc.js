module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint', 'prettier'
      ],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'prettier/prettier': 2 // Means error
      }
    },
  ],
  
};
