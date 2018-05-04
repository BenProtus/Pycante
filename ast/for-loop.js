module.exports = class ForLoop {
  constructor(body, initialization, condition, iterator) {
    this.body = body;
    this.initialization = initialization;
    this.condition = condition;
    this.iterator = iterator;
  }

  analyze(context) {
    console.log(context);
    const bodyContext = context.createChildContextForLoop();
    console.log(bodyContext);
    this.initialization.analyze(bodyContext);
    const conditionType = this.condition.analyze(bodyContext); // This is undefined, should be a boolean
    // console.log(conditionType);
    if (!conditionType.isBoolean()) {
      throw new Error('for loop condition must be a boolean.');
    }
    this.iterator.analyze(bodyContext);
    this.body.analyze(bodyContext);
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
