const NamedType = require('./NamedType');

module.exports = class StringLiteral {
  constructor(value) {
    this.value = value;
  }

  analyze() {
    this.type = NamedType.STRING;
  }

  optimize() {
    return this;
  }
};
