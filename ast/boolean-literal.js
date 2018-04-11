<<<<<<< HEAD
=======
const NamedType = require('./NamedType');
>>>>>>> a3640798bc4106203e33fc9188ece370f08b2a54

module.exports = class BooleanLiteral {
  constructor(value) {
    this.value = value;
  }

<<<<<<< HEAD
  analyze() { // eslint-disable-line class-methods-use-this
    // Intentionally empty
=======
  analyze() {
    this.type = NamedType.BOOLEAN;
>>>>>>> a3640798bc4106203e33fc9188ece370f08b2a54
  }

  optimize() {
    return this;
  }
};
