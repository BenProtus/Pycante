module.exports = class PrintStatement {
  constructor(printValue) {
    this.printValue = printValue;
  }

  analyze(context) {
    if (this.printValue) {
      this.printValue.analyze(context);
    }
    context.assertInFunction('Print statement outside function');
  }

  optimize() {
    if (this.printValue) {
      this.printValue = this.printValue.optimize();
    }
    return this;
  }
};
