module.exports = class ForLoop {
  constructor(counter, body) {
    Object.assign(this, { counter, body });
  }
};

const VariableInitialization = require('./variable_initialization.js');
const Type = require('./NamedType');

class ForStatement {
  constructor(id, exp, block) {
    this.id = id;
    this.expression = exp;
    this.block = block;
  }
}
