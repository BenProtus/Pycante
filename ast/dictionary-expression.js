const Type = require("./NamedType");
module.exports =   class DictionaryType extends Type {
  constructor(keyType, valueType) {
    this.valueType = Type.valueType;
  }
};
