const FunctionObject = require('./function-object');
module.exports = class ClassDeclaration {
  constructor(id, params, body) {
    this.id = id;
    this.function = new FunctionObject(id, params, body);
  }
  analyze(context) {
    context.add(this.function);
    this.function.analyze(context.createChildContextForFunctionBody(this));
  }
};
