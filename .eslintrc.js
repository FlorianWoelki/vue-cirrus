module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'template-curly-spacing': 'off',
    'max-len': ['off', { code: 80, ignoreUrls: true }],
    indent: 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
