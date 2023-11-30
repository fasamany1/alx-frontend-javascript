export default class HolbertonCourse {
  /**
   * name - course name.
   * length - course duration (in months).
   * students - names of students taking the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Gets name of course.
  get name() {
    return this._name;
  }

  // Sets the name of this course.
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Gets course duration (in months).
  get length() {
    return this._length;
  }

  // Sets course duration (in months).
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Gets names of students taking the course.
  get students() {
    return this._students;
  }

  // Sets students names in the course.
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
