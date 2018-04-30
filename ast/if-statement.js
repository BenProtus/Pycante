const Context = require('../semantics/context');
const ReturnStatement = require("./return-statement");
module.exports = class IfStatement {
  constructor(cases, alternate) {
    Object.assign(this, { cases, alternate });
  }

  analyze(Context) {
    this.cases.forEach(c => c.analyze(context.createChildContextForBlock()));
    if (this.alternate) {
      this.alternate.forEach(s => s.analyze(context.createChildContextForBlock()));
    }
    
  if (context.assertInFunction("if statement is not inside a function.") ) {

  }


  }
  optimize() {
    this.cases.map(s => s.optimize()).filter(s => s !== null);
    this.alternate = this.alternate ? this.alternate.optimize() : null;
    return this;
  }
};
