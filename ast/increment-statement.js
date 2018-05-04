module.exports = class Increment {
  constructor(increment, operand) {
    Object.assign(this, { increment, operand });
  }

  analyze(context) {
    this.operand.analyze(context);
  }

  optimize() {
    return this;
  }
};
