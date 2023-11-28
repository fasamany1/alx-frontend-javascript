export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // returns an iterator to go through every employee in every department.
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
