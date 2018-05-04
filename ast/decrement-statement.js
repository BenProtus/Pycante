module.exports = class Decrement {
  constructor(decrement, operand) {
    Object.assign(this, { decrement, operand });
  }

  analyze(context) { // eslint-disable-line class-methods-use-this
    this.operand.analyze(context);
  }

  optimize() {
    return this;
  }
};
