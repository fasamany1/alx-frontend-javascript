export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }
  // gets building size in square feet.
  get sqft() {
    return this._sqft;
  }
  // sets building size in square feet.
  set sqft(value) {
    this._sqft = value;
  }
}
