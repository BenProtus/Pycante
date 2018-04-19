const fs = require('fs');

const ohm = require('ohm-js');

const grammar = ohm.grammar(fs.readFileSync('./pycante.ohm'));
const Program = require('../ast/program');
const IncrementExp = require('../ast/increment-expression');
const IncrementStat = require('../ast/increment-statement');
const DecrementExp = require('../ast/decrement-expression');
const DecrementStat = require('../ast/decrement-statement');

const VarDec = require('../ast/variable-declaration');
const PrintStatement = require('../ast/print-statement');
const AssignmentStatement = require('../ast/assignment-statement');
const ClassDec = require('../ast/class-declaration');
const ReturnStatement = require('../ast/return-statement');
const IfStatement = require('../ast/if-statement');
const WhileStatement = require('../ast/while-statement');
const WhatExpression = require('../ast/what-expression');
const FunDeclaration = require('../ast/function-declaration');
const BinaryExpression = require('../ast/binary-expression');
const Params = require('../ast/parameter');
const Param = require('../ast/parameter');
const BoolLiteral = require('../ast/boolean-literal');
const NumberLiteral = require('../ast/numeric-literal');
const StringLiteral = require('../ast/string-literal');
const ForStatement = require('../ast/for-loop');
const NamedTyped = require('../ast/NamedType');
const MethodCall = require('../ast/method-call');
const ListExpression = require('../ast/list-expression');
const IdExpression = require('../ast/id-expression');
const FunctionDec = require('../ast/function-declaration');
const FunctionCall = require('../ast/function-call');
const DictionaryExpression = require('../ast/dictionary-expression');
const Case = require('../ast/case');

function unpack(a) {
  return a.length === 0 ? null : a[0];
}

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {

  Program(Statement) { return new Program(Statement.ast()); },

  Statement_inc(op, exp) { return new IncrementStat(op.sourceString(), exp.ast()); },
  Statement_dec(op, exp) { return new DecrementStat(op.sourceString(), exp.ast()); },
  VarDec(_1, id, _2, exp) { return new VarDec(id.ast(), exp.ast()); },
  FunDeclaration(_1, id, _2, params, _3, type, statement, Return, _4) {
    return new FunDeclaration(id.ast(), params.ast(), type.ast(), statement.ast(), Return.ast());
  },

  Params(param1, _1, param2) { return new Params(param1.ast(), ...param2.ast()); },
  Param(id, _1, type) { return new Param(id.ast(), type.ast()); },

  Exp_or(left, op, right) {
    return new BinaryExpression(left.ast(), op.ast(), right.ast());
  },
  Exp1_and(left, op, right) {
    return new BinaryExpression(left.ast(), op.ast(), right.ast());
  },
  Exp2_binary(left, op, right) {
    return new BinaryExpression(op.ast(), left.ast(), right.ast());
  },
  Exp3_binary(left, op, right) {
    return new BinaryExpression(op.ast(), left.ast(), right.ast());
  },
  Exp4_binary(left, op, right) {
    return new BinaryExpression(op.ast(), left.ast(), right.ast());
  },
  Exp5_binary(left, op, right) {
    return new BinaryExpression(op.ast(), left.ast(), right.ast());
  },
  Exp6_inc(op, exp) {
    return new IncrementExp(op.ast(), exp.ast());
  },
  Exp6_dec(op, exp) {
    return new DecrementExp(op.ast(), exp.ast());
  },
  Exp7_parens(_1, exp, _2) { return exp.ast(); },

  Type(type) { return type.ast(); },
  FunctionCall(id, _1, exps, _2) { return new FunctionCall(id.ast(), exps.ast()); },
  Assignment(v, _, e) { return new AssignmentStatement(v.ast(), e.ast()); },
  ClassDec(_1, id, vars, FuncDec, _2) {
    return new ClassDec(id.ast(), vars.ast(), FuncDec.ast());
  },
  Return_returnExpression(_1, exp) { return exp.ast(); },
  Return_returnNothing(_1) {},
  Return_implicitReturnExpression(exp) { return exp.ast(); },
  WhatExp(_1, exp) { return exp.ast(); },
  List(_1, exp, _2) { return [...exp.ast()]; },
  // need to allow Dictionary to have many possible sets...
  Dictionary(t, _1, ts, _2) {
    return new DictionaryExpression([t.ast(), ...ts.ast()]);
  },
  // Add DictTerm to AST folder
  DictTerm(id, _, Exp) { return new DictTerm(id, Exp); },
  ForStatement(_1, forblock, statement, _6) {
    return new ForStatement(forblock.ast(), statement.ast());
  },
  WhileStatement(_1, test, suite, _2) { return new WhileStatement(test.ast(), suite.ast()); },
  IfStatement(_1, firstTest, firstSuite, _2, moreTests, moreSuites, _3, lastSuite, _4) {
    const tests = [firstTest.ast(), ...moreTests.ast()];
    const bodies = [firstSuite.ast(), ...moreSuites.ast()];
    const cases = tests.map((test, index) => new Case(test, bodies[index]));
    return new IfStatement(cases, unpack(lastSuite.ast()));
  },
  PrintStatement(_1, _2, exp) { return exp.ast(); },

  BoolLiteral(_) { return new BoolLiteral(!!this.sourceString); },
  NumberLiteral(_) { return new NumberLiteral(+this.sourceString); },
  StringLiteral(_1, chars, _6) { return new StringLiteral(this.sourceString); },

  id(_1, _2) { return this.sourceString; },
  _terminal() { return this.sourceString; },
});
/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    throw new Error(`Syntax Error: ${match.message}`);
  }
  return astGenerator(match).ast();
};
