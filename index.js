const _ = require('lodash');
const Freeze = require('deep-freeze');
class Immutable {
  constructor(obj) {    
    Object.keys(obj).forEach(key => {
      this[key] = obj[key];
    });
    Freeze(this);
  }

  with(property, value) {
    let theNew = JSON.parse(JSON.stringify(this));

    _.set(theNew, property, value);
    return new Immutable(theNew);
  }

  without(property) {
    let theNew = JSON.parse(JSON.stringify(this));

    delete theNew[property];
    return new Immutable(theNew);
  }
}

module.exports = Immutable;