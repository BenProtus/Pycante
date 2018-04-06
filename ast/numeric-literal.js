const NUMBER = require('./NamedType');

module.exports = class NumericLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something with NUMBER here
  }

  optimize() {
    return this;
  }
};
