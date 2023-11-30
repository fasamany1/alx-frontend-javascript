export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
  
  // get-gets the name or code and set sets the name or code.
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
