const Context = require('../semantics/context');

module.exports = class ForLoop {
  constructor(body, initialization, condition, iterator) {
    this.body = body;
    this.initialization = initialization;
    this.condition = condition;
    this.iterator = iterator;
  }
  analyze(context) {
    const innerContext = new Context({
      parent: context,
      inLoop: true,
      inFunction: context.inFunction,
    });
    this.initialization.analyze(innerContext);
    const conditionType = this.condition.analyze(innerContext);
    if (!conditionType.isBoolean()) {
      throw new Error('for loop condition must be a boolean.');
    }
    this.iterator.analyze(innerContext);
    this.body.analyze(innerContext);
  }

  toString() {
    return `(for ${this.body} ${this.initialization} ${this.condition} ${this.iterator})`;
  }

  optimize() {
    this.initialization = this.initialization.optimize();
    this.condition = this.condition.optimize();
    this.iterator = this.iterator.optimize();
    this.body.optimize();
    return this;
  }
};
