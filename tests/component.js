import Component from '@ember/component';

const OBJECT = {
  VALUE: 'VALUE',
};

export default Component.extend({
  number: 1,
  objectValue: OBJECT.VALUE,
  string: 'value',

  init() {
    this._super(...arguments);
  },
});
