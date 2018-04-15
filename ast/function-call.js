module.exports = class Call {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }

  analyze(context){
  	if (!context.hasBeenDeclared(this.id)) {
      throw new Error(`Function ${this.id} has not been declared`);
    }
    const functionDec = context.lookup(this.id);

    if (!functionDec.func) {
      throw new Error(`${this.id} is not a function.`);
    }
  }

  optimize() {
    this.args.optimize();
    return this;
  }

};
