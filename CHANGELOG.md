# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.5.0"></a>
# [0.5.0](https://github.com/Bagaar/eslint-config-ember/compare/v0.4.0...v0.5.0) (2019-02-04)


* Dependency updates (#4) ([0ceb6c6](https://github.com/Bagaar/eslint-config-ember/commit/0ceb6c6)), closes [#4](https://github.com/Bagaar/eslint-config-ember/issues/4)


### BREAKING CHANGES

* Since `@bagaar/eslint-config-ember` does not override any rules of `@bagaar/eslint-config`, extending has no real benefit besides not having to include `@bagaar/eslint-config` inside a project's extends.
Removing the extend also has the benefit that we can switch out the ESLint specific config without having to change this library.

* chore: Update the README

Remove references to `@bagaar/eslint-config-ember` and add a note about the eslint-plugin-ember dependency.



<a name="0.4.0"></a>
# [0.4.0](https://github.com/Bagaar/eslint-config-ember/compare/v0.3.0...v0.4.0) (2019-01-31)


### Features

* Update rules ([6d0fa54](https://github.com/Bagaar/eslint-config-ember/commit/6d0fa54))
