module.exports = class IfStatement {
  constructor(cases, alternate) {
    Object.assign(this, { cases, alternate });
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this;
  }
};
