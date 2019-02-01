# Bagaar EsLint Config Ember

![Bagaar Logo](https://bagaar.be/hubfs/logo-bagaar-black.svg)

**`@bagaar/eslint-config-ember` is built and maintained by [Bagaar](http://bagaar.be).**

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

EsLint config for Bagaar Ember addons and projects.

## Installation

⚠️ **`@bagaar/eslint-config-ember` overrides rules provided by the [`ember-plugin-eslint`](https://github.com/ember-cli/eslint-plugin-ember) plugin. Make sure it is installed and configured properly.**

### npm

```shell
npm install @bagaar/eslint-config-ember --save-dev
```

### yarn

```shell
yarn add @bagaar/eslint-config-ember --dev
```

## Usage

Add `@bagaar/eslint-config-ember` to the `extends` array of your `.eslintrc.js` file.

```javascript
// .eslintrc.js

extends: [
  '@bagaar/eslint-config-ember',
],
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
