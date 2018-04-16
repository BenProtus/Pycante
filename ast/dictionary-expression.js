const Type = require("./NamedType");

module.exports =   class Dictionary {
  constructor(bindList, valueType) {
    this.bindList = bindList;
    this.valueType = Type.valueType;
  }
  toString() {
      return "{" + this.bindList.toString() + "}";
  }
  analyze(context) {
    this.bindList.items.forEach(function(item) {
      item.analyze(context);
    });
    // needs to find out the
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
