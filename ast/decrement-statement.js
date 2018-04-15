const NumericLiteral = require('./numeric-literal');

module.exports = class Decrement {
  constructor(dec, operand) {
    Object.assign(this, { dec, operand });
  }
  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }
  optimize() {
    return this;
  }
};
