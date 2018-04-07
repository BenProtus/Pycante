module.exports = class DecrementExpression {
  constructor(decrement, op) {
    this.op = op;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this;
  }
};
