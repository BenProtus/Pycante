const NamedType = require('./NamedType');

module.exports = class NumericLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() {
    this.type = NamedType.NUMBER;
  }

  optimize() {
    return this;
  }
};
