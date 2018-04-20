module.exports = class DecrementExpression {
  constructor(decrement, op) {
    this.op = op;
  }

  analyze(context) {
    this.op.analyze(context);
  }

  optimize() {
    return this;
  }
};
