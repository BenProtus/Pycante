const fs = require('fs');

const ohm = require('ohm-js');

const grammar = ohm.grammar(fs.readFileSync('./pycante.ohm'));
const Program = require('../ast/program');
const IncrementExp = require('../ast/increment-expression');
const IncrementStat = require('../ast/increment-statement');
const DecrementExp = require('../ast/decrement-expression');
const DecrementStat = require('../ast/decrement-statement');

const VarDec = require('../ast/variable-declaration');
const FuncDec = require('../ast/function-declaration');
const ClassDec = require('../ast/class-declaration');
const Param = require('../ast/parameter');
const BinaryExpression = require('../ast/binary-expression');
const MethodCall = require('../ast/method-call');
const SubscriptedExpression = require('../ast/subscripted-expression');
const NamedType = require('../ast/NamedType');
const FunctionCall = require('../ast/function-call');
const AssignmentStatement = require('../ast/assignment-statement');
const ReturnStatement = require('../ast/return-statement');
const WhatExpression = require('../ast/what-expression');
const ListExpression = require('../ast/list-expression');
const DictionaryExpression = require('../ast/dictionary-expression');
const DictTerm = require('../ast/dict-term');
const ForStatement = require('../ast/for-loop');
const WhileStatement = require('../ast/while-statement');
const IfStatement = require('../ast/if-statement');
const PrintStatement = require('../ast/print-statement');
const NumberLiteral = require('../ast/numeric-literal');
const StringLiteral = require('../ast/string-literal');
const BoolLiteral = require('../ast/boolean-literal');
const IdExpression = require('../ast/id-expression');
const Case = require('../ast/case');

function unpack(a) {
  return a.length === 0 ? null : a[0];
}

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {

  Program(Statement) { return new Program(Statement.ast()); },

  Statement_inc(op, exp) { return new IncrementStat(op.sourceString, exp.ast()); },
  Statement_dec(op, exp) { return new DecrementStat(op.sourceString, exp.ast()); },
  VarDec(_1, id, _2, exp) { return new VarDec(id.sourceString, exp.ast()); },
  FuncDec(_1, id, _2, params, _3, type, statement, _4) {
    return new FuncDec(
      id.sourceString, params.ast(),
      NamedType.withName(type.sourceString),
      statement.ast(),
    );
  },

  Param(id, _, type) { return new Param(id.sourceString, NamedType.withName(type.sourceString)); },

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
  Exp7_id(id) { return new IdExpression(id.sourceString); },
  Exp7_subscripted(list, _1, subscript, _2) {
    return new SubscriptedExpression(list.ast(), subscript.ast());
  },

  FunctionCall(id, _1, exps, _2) { return new FunctionCall(id.sourceString, exps.ast()); },
  Assignment(v, _, e) {
    return new AssignmentStatement(new IdExpression(v.sourceString), e.ast());
  },
  ClassDec(_1, id, vars, FunDec, _2) {
    return new ClassDec(id.sourceString, vars.ast(), FunDec.ast());
  },
  Return_returnExpression(_, exp) { return new ReturnStatement(exp.ast()); },
  Return_returnNothing(_) { return new ReturnStatement(); },
  WhatExp(_1, _2, exp, _3) { return exp.ast(); },
  Exps(first, _, rest) { return [first.ast(), ...rest.ast()]; },
  List(_1, exp, _2) { return new ListExpression([...exp.ast()]); },
  // need to allow Dictionary to have many possible sets...
  Dictionary(t, _1, ts, _2) {
    return new DictionaryExpression([t.ast(), ...ts.ast()]);
  },
  // Add DictTerm to AST folder
  DictTerm(id, _, Exp) { return new DictTerm(id, Exp); },
  //   ForStatement   = "for" "(" VarDec ";" Exp ";" Exp ")" Statement* "end"
  ForStatement(_1, _2, varDec, _3, test, _4, incdec, _5, body, _6) {
    return new ForStatement(body.ast(), varDec.ast(), test.ast(), incdec.ast());
  },
  WhileStatement(_1, test, suite, _2) { return new WhileStatement(test.ast(), suite.ast()); },
  IfStatement(_1, firstTest, firstSuite, _2, moreTests, moreSuites, _3, lastSuite, _4) {
    const tests = [firstTest.ast(), ...moreTests.ast()];
    const bodies = [firstSuite.ast(), ...moreSuites.ast()];
    const cases = tests.map((test, index) => new Case(test, bodies[index]));
    return new IfStatement(cases, unpack(lastSuite.ast()));
  },
  PrintStatement(_, e) { return new PrintStatement(e.ast()); },
  Test(_1, exp, _2) { return exp.ast(); },

  BoolLiteral(_) { return new BoolLiteral(this.sourceString === 'true'); },
  NumberLiteral(_1, _2, _3) { return new NumberLiteral(+this.sourceString); },
  StringLiteral(_1, chars, _6) { return new StringLiteral(this.sourceString); },

  NonemptyListOf(first, _, rest) { return [first.ast(), ...rest.ast()]; },
  EmptyListOf() { return []; },

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
