
module.exports = class DictTerm {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }

  analyze(context) {
    this.value.analyze(context);
    return this;
  }

  optimize() {
    this.value.optimize();
    return this;
  }
};
