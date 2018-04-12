module.exports = class Variable {
  constructor(id) {
    this.id = id;
  }

  anlayze(context) {
    this.value = context.lookup(this.id);
  }

  optimize() {
    return this;
  }
};
