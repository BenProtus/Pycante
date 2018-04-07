module.exports = class MethodCall {
  constructor(object, call) {
    this.object = object;
    this.call = call;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this;
  }
};
