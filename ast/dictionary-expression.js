module.exports = class Dictionary {
  constructor(termList) {
    this.termList = termList;
  }

  analyze(context) {
    this.termList.items.forEach((item) => {
      item.analyze(context);
    });
    return this;
  }

  length() {
    return this.termList.length;
  }

  optimize() {
    this.termList.optimize();
    return this;
  }
};
