const NumericLiteral = require('./numeric-literal');

module.exports = class Decrement {
  constructor(dec, operand) {
    Object.assign(this, { dec, operand });
  }
};
