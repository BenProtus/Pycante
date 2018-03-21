const NumericLiteral = require('./numeric-literal');

module.exports = class Increment {
    constructor(dec, operand) {
      Object.assign(this, { dec, operand });
    }
};
