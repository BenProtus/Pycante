module.exports = class Parameter {
  constructor(id, Type) {
    Object.assign(this, { id, Type });
  }

  analyze(context){
  	if(context.lookup(this.Type) === undefined){
  		throw new Error('Parameter was not given a type.');
  	}
  }

  optimize() {
    return this;
  }
};
