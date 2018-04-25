module.exports = class Parameter {
  constructor(id, type) {
    Object.assign(this, { id, type });
  }

  get isRequired() {
    return this.type === null;
  }

  analyze(context) {
    if (this.type) {
      this.type.analyze();
    }
    context.add(this);
  }

  optimize() {
    this.type = this.type.optimize();
    return this;
  }
};
