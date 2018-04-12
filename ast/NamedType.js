class NamedType {
  constructor(name) {
    this.name = name;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Intentionally empty
  }

  optimize() {
    return this;
  }
}

NamedType.BOOLEAN = new NamedType('bool');
NamedType.NUMBER = new NamedType('number');
NamedType.STRING = new NamedType('string');

module.exports = NamedType;
