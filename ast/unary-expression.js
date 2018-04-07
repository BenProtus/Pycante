const BoolLit = require('./boolean-literal.js');
const NumLit = require('./numeric-literal.js');

module.exports = class UnaryExpression {
  constructor(op, exp) {
    this.op = op;
    this.expression = exp;
  }
};
