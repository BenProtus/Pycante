const Variable = require('./variable');

module.exports = class VariableDeclaration {
  constructor(id, initializer) {
    Object.assign(this, { id, initializer });
  }

  analyze(context) {
    this.initializer.analyze(context);
    this.variable = new Variable(this.id);
    context.add(this.variable);
  }

  optimize() {
    return this;
  }
};
