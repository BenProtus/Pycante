module.exports = class UnaryExpression {
  constructor(op, operand) {
    Object.assign(this, { op, operand });
  }
};
