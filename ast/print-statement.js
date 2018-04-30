const NamedType = require('./NamedType');

module.exports = class PrintStatement {
  constructor(printValue) {
    this.printValue = printValue;
  }

  analyze(context) {
    if (context.hasBeenDeclared(this.printValue)) {
      const val = context.lookup(this.printValue);
      if (val.type !== NamedType.STRING) {
        throw new Error(`🔥 WARNING🔥
          Type Error: ${this.printValue} is not a String`);
      }
    } else if (!(this.printValue.charAt(0) === '"'
    && this.printValue.charAt(this.printValue.length - 1) === '"')) {
      throw new Error(`🔥 WARNING🔥
        Undeclared Variable: ${this.printValue} has not been declared`);
    }
  }

  optimize() {
    return this;
  }
};
