const NumericLiteral = require('./numeric-literal');

module.exports = class Increment {
  constructor(increment, operand) {
    Object.assign(this, { increment, operand });
  }
};
