const NamedType = require('./NamedType');

module.exports = class BooleanLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() {
    this.type = NamedType.BOOLEAN;
  }

  optimize() {
    return this;
  }
};
