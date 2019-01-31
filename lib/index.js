module.exports = {
  extends: [
    '@bagaar/eslint-config',
  ],
  rules: {
    'ember/alias-model-in-controller': 'error',
    'ember/avoid-leaking-state-in-components': 'error',
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',
    'ember/no-jquery': 'error',
    'ember/no-new-mixins': 'error',
    'ember/no-observers': 'error',
  },
};
