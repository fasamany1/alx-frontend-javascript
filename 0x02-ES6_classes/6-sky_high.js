import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }
  // gets floor number.
  get floors() {
    return this._floors;
  }
  // sets floor number.
  set floors(value) {
    this._floors = value;
  }
  // returns a warning to evacuate from a floor number.
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
