const NamedType = require('./NamedType');

module.exports = class BooleanLiteral {
  constructor(value) {
    this.value = value;
  }


  analyze() { // eslint-disable-line class-methods-use-this
    // Intentionally empty
  }

  toString() {
    return this.value;
  }

  optimize() {
    return this;
  }
};
