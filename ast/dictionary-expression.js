const Type = require('./NamedType');

module.exports = class Dictionary {
  constructor(bindList, valueType) {
    this.bindList = bindList;
    this.valueType = Type.valueType;
  }
  analyze(context) {
    this.bindList.items.forEach((item) => {
      item.analyze(context);
    });
    return this.valueType;
  }
  length() {
    return this.items.length;
  }

  optimize() {
    this.items.optimize();
    return this;
  }
};
