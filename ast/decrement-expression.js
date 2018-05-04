module.exports = class DecrementExpression {
  constructor(decrement, operand) {
    Object.assign(this, { decrement, operand });
  }

  analyze(context) {
    this.operand.analyze(context);
  }

  optimize() {
    return this;
  }
};
