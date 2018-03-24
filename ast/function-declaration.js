const FunctionObject = require('./function-object');
const Params = require('./parameters.js');

// A function declaration binds a function object to a name.
module.exports = class FunctionDeclaration {
  constructor(id, params, body) {
    this.id = id;
    this.function = new FunctionObject(id, params, body);
  }
};

 //
 // this.key = id;
 // this.params = params;
 // this.block = block;
