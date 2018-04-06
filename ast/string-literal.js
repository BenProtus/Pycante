const STRING = require('./NamedType');

module.exports = class StringLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something with STRING here
  }

  optimize() {
    return this;
  }
};
