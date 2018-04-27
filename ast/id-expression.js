module.exports = class IdExpression {
  constructor(id) {
    this.id = id;
  }

  analyze(context) {
    // if (!context.hasBeenDeclared(this.id)) {
    //   throw new Error(`${this.id} has not been declared.`);
    // }
    this.referent = context.lookup(this.id);
  }

  toString() {
    return `(Id ${this.id})`;
  }

  optimize() {
    return this;
  }
};
