module.exports = class IdExpression {
  constructor(id) {
    this.id = id;
  }

  analyze(context) {
    this.referent = context.lookup(this.id);
  }

  toString() {
    return `(Id ${this.id})`;
  }

  optimize() {
    return this;
  }
};
