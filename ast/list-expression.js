
const Type = require('./NamedType');

module.exports = class List {
  constructor(exp, lastExp) {
    this.exp = exp;
    this.lastExp = lastExp;
  }

  analyze(context) {
    this.lastExp.analyze(context);
    for (let i = 0; i < this.exp.length; i += 1) {
      this.exp[i].analyze(context);
    }

  }

  optimize() {
    return this;
  }

};
