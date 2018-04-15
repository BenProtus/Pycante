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
const ReturnStatement = require('../ast/return-statement');
const IfStatement = require('../ast/if-statement');
const WhileStatement = require('../ast/while-statement');
const WhatExpression = require('../ast/what-expression');
const FunDeclaration = require('../ast/function-declaration');
const BinaryExpression = require('../ast/binary-expression');
const UnaryExpression = require('../ast/unary-expression');
const Params = require('../ast/parameter');
const Param = require('../ast/parameter');
const BooleanLiteral = require('../ast/boolean-literal');
const NumericLiteral = require('../ast/numeric-literal');
const StringLiteral = require('../ast/string-literal');
const ForStatement = require('../ast/for-loop');
const NamedTyped = require('../ast/NamedType');
const MethodCall = require('../ast/method-call');
const ListExpression = require('../ast/list-expression');
const IdExpression = require('../ast/id-expression');
const functionObj = require('../ast/function-object');
const FunctionCall = require('../ast/function-call');
const DictionaryExpression = require('../ast/dictionary-expression');
const classDec = require('../ast/class-declaration');

function unpack(a) {
  return a.length === 0 ? null : a[0];
}

/* eslint-disable no-unused-vars */
const astGenerator = grammar.createSemantics().addOperation('ast', {

  Program(Statement) { return new Program(Statement.ast()); },

  Statement_inc(op, e) { return new IncrementStat(op.sourceString(), e.ast()); },
  Statement_dec(op, e) { return new DecrementStat(op.sourceString(), e.ast()); },
  VarDec(_1, id, _2, e) { return new VarDec(id.ast(), e.ast()); },
  FunDeclaration(_1, id, _2, Pars, _3, Type, Statement, Return, _4) {
    return new FunDeclaration(id.ast(), Params.ast(), Type.ast(), Statement.ast(), Return.ast());
  },
  // Params(Param1, _1, Param2) { return new Params},
  Params(Param1, _1, Param2) { return new Params(Param1.ast(), Param2.ast()); },
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
  Exp7_parens(_1, expression, _2) { return expression.ast(); },
  Type(name) { return name.ast(); },
  FunCall(id, _1, Exps, _2) { return new FunCall(id.ast(), Exps.ast()); },
  Assignment(v, _, e) { return new AssignmentStatement(v.ast(), e.ast()); },
  Class(_1, id, VarDec, FunDeclaration, _2) {
    return new Class(id.ast(), VarDec.ast(), FunDeclaration.ast());
  },
  Return_returnExpression(_1, e) { return e.ast(); },
  Return_returnNothing(_1) {},
  Return_implicitReturnExpression(e) { return e.ast(); },
  WhatExp(_1, e) { return e.ast(); },
  List(_1, exp, _2) { return [...exp.ast()]; },
  // need to allow Dictionary to have many possible sets...
  Dictionary(DictTerm, DictTerms, _) {
    return new DictionaryExpression(DictTerm, ...DictTerms);
  },
  // Add DictTerm to AST folder
  DictTerm(id, _, Exp) { return new DictTerm(id, Exp); },
  DictTerms(_1, id, _2, Exp) { return new DictTerms(id, Exp); },

  ForStatement(_1, VDec, _2, Test, _3, Exp, _5, Suite, _6) {
    return new ForStatement(VarDec.ast(), Test.ast(), Exp.ast(), Suite.ast());
  },

  WhileStatement(_1, test, suite, _2) { return new WhileStatement(test.ast(), suite.ast()); },

  IfStatement(_1, firstTest, firstSuite, _2, moreTests, moreSuites, _3, lastSuite, _4) {
    const tests = [firstTest.ast(), ...moreTests.ast()];
    const bodies = [firstSuite.ast(), ...moreSuites.ast()];
    const cases = tests.map((test, index) => new Case(test, bodies[index]));
    return new IfStatement(cases, unpack(lastSuite.ast()));
  },


  // Stmt_def(_1, id, _2, params, _3, suite) {
  //   return new FunDeclaration(id.ast(), params.ast(), suite.ast());
  // },
  // // SimpleStmt_break(_) { return new BreakStatement(); },
  // SimpleStmt_return(_, e) { return new ReturnStatement(unpack(e.ast())); },
  // // SimpleStmt_call(c) { return new CallStatement(c.ast()); },
  // Suite_small(_1, statement, _2) { return [statement.ast()]; },
  // Suite_large(_1, _2, _3, statements, _4) { return statements.ast(); },
  // // VarExp_subscripted(v, _1, e, _2) { return new SubscriptedExpression(v.ast(), e.ast()); },
  // // VarExp_simple(id) { return new IdentifierExpression(id.ast()); },
  // NonemptyListOf(first, _, rest) { return [first.ast(), ...rest.ast()]; },
  // EmptyListOf() { return []; },
  // boollit(_) { return new BooleanLiteral(!!this.sourceString); },
  // numlit(_1, _2, _3, _4, _5, _6) { return new NumericLiteral(+this.sourceString); },
  // strlit(_1, chars, _6) { return new StringLiteral(this.sourceString); },
  //
  // id(_1, _2) { return this.sourceString; },
  // _terminal() { return this.sourceString; },
});
/* eslint-enable no-unused-vars */

module.exports = (text) => {
  const match = grammar.match(text);
  if (!match.succeeded()) {
    throw new Error(`Syntax Error: ${match.message}`);
  }
  return astGenerator(match).ast();
};
