module.exports = class WhatExpression {
  constructor(variable) {
    this.variable = variable;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this.type;
  }
};
