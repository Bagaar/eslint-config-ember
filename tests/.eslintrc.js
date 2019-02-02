module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'ember',
  ],
  extends: [
    'eslint:recommended',
    '@bagaar/eslint-config',
    'plugin:ember/recommended',
    '../lib/index.js',
  ],
  env: {
    browser: true,
  },
};
