# Bagaar EsLint Config Ember

![Bagaar Logo](https://bagaar.be/hubfs/logo-bagaar-black.svg)

**`@bagaar/eslint-config-ember` is built and maintained by [Bagaar](https://bagaar.be).**

[![NPM Version](https://badge.fury.io/js/%40bagaar%2Feslint-config-ember.svg)](https://badge.fury.io/js/%40bagaar%2Feslint-config-ember) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

EsLint config for Bagaar Ember addons and projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

⚠️ **`@bagaar/eslint-config-ember` overrides rules provided by the [`eslint-plugin-ember`](https://github.com/ember-cli/eslint-plugin-ember) plugin. Make sure at least `v6.2.0` is installed and configured properly.**

### NPM

```shell
npm install @bagaar/eslint-config-ember --save-dev
```

### Yarn

```shell
yarn add @bagaar/eslint-config-ember --dev
```

## Usage

Add `@bagaar/eslint-config-ember` to the `extends` array of your `.eslintrc.js` file.

```javascript
// .eslintrc.js

module.exports = {
  extends: [
    'eslint:recommended',
    '@bagaar/eslint-config',
    'plugin:ember/recommended',
    '@bagaar/eslint-config-ember'
  ]
};
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
