class NamedType {
  constructor(name) {
    this.name = name;
  }

  analyze() { // eslint-disable-line class-methods-use-this
    // Do something
  }

  optimize() {
    return this;
  }
}

NamedType.BOOLEAN = new NamedType('bool');
NamedType.NUMBER = new NamedType('number');
NamedType.STRING = new NamedType('string');
