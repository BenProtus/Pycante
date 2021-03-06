module.exports = class FunctionObject {
  constructor(id, params, type, body) {
    Object.assign(this, {
      id, params, type, body,
    });
  }

  // Functions like sqrt which are pre-defined are known as
  // "external" functions because they are not declared in the current
  // module and we therefore don't generate code for them.
  get isExternal() {
    return !this.function.body;
  }

  analyze(context) {
    // Each parameter will be declared in the function's scope, mixed in
    // with the function's local variables. This is by design.
    this.params.forEach(p => p.analyze(context));

    // Now we analyze the body with the local context. Note that recursion is
    // allowed, because we've already inserted the function itself into the
    // outer context, so recursive calls will be properly resolved during the
    // usual "outward moving" scope search. Of course, if you declare a local
    // variable with the same name as the function inside the function, you'll
    // shadow it, which would probably be not a good idea.
    if (this.body) {
      this.body.forEach(s => s.analyze(context));
    }
  }

  optimize() {
    this.parameters.forEach(p => p.optimize());
    this.body.forEach(s => s.optimize());
    this.body = this.body.filter(s => s !== null);
    // Suggested: Look for returns in the middle of the body
    return this;
  }
};
