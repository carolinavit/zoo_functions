const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const fullNameEmployee = employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
  return fullNameEmployee;
}
module.exports = getEmployeeByName;
