const BOOLEAN = require('./NamedType');

module.exports = class BooleanLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something with BOOLEAN here
  }

  optimize() {
    return this;
  }
};
