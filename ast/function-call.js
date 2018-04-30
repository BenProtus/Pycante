const Context = require('../semantics/context');

module.exports = class FunctionCall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }

  analyze(context) {
    if (context.hasBeenDeclared(this.id)) {
      const func = context.lookup(this.id);
      func.analyze(context);
      this.type = func.Return;

      if (this.args.length !== func.params.length) {
        throw new Error(`🔥 WARNING🔥
          Arity Error: Provided ${this.args.length} arguments,
          Expected ${func.params.length} arguments`);
      }

      for (let i = 0; i < this.args.length - 1; i += 1) {
        if (!context.hasBeenDeclared(this.args[i])) {
          throw new Error(`🔥 WARNING🔥
            Undeclared Variable: ${this.args[i]} has not been declared.`);
        }

        const arg = context.getValue(this.args[i]);
        if (arg.type !== func.paramTypes[i]) {
          throw new Error(`🔥 WARNING🔥
            Type Error: Expected ${this.args[i]} to be ${func.params[i].toString()}.`);
        }
      }
    } else {
      throw new Error(`🔥 WARNING🔥
        Undeclared Variable: ${this.id}(${this.args})`);
    }
  }

  optimize() {
    this.id = this.id.optimize();
    this.args.forEach(arg => arg.optimize());
    return this;
  }
};
