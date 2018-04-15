module.exports = class PrintStatement {
  constructor(printValue) {
    this.printValue = printValue;
  }
  // Needs to check the type.
  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this;
  }
};
