module.exports = class VariableDeclaration {
  constructor(ids, initializers) {
    Object.assign(this, { ids, initializers });
  }
};
