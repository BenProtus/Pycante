module.exports = class BinaryExpression {
  constructor(op, left, right) {
    this.left = left;
    this.op = op;
    this.right = right;
  }
};
