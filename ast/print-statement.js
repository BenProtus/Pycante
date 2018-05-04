module.exports = class PrintStatement {
  constructor(expression) {
    this.expression = expression;
  }

  analyze(context) {
    this.expression.analyze(context);
  }

  optimize() {
    return this;
  }
};
