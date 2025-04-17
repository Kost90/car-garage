module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-debugger': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-var': 'error',
    'prefer-const': 'error',
    'object-shorthand': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'newline-before-return': 'warn',
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
