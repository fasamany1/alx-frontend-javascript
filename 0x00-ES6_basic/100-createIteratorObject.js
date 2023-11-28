export default function createIteratorObject(report) {
  return (function* _() {
    // returns department name and list all employees.
    for (const department of Object.values(report.allEmployees)) {
      // returns the number of departments.
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
