module.exports = class AssignmentStatement {
  constructor(target, source) {
    Object.assign(this, { target, source });
  }

  analyze(context) {
    // if (this.targets.length !== this.sources.length) {
    //   throw new Error('Number of variables does not equal number of expressions');
    // }
    this.source.analyze(context);
    this.target.analyze(context);
  }

  optimize() {
    this.source.optimize();
    this.target.optimize();
    // Suggested: Turn self-assignments without side-effects to null
    return this;
  }
};
