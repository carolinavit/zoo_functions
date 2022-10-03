const { employees } = require('../data/zoo_data');

function isManager(id) {
  const verifyMananger = employees.some((element) =>
    element.managers.includes(id));
  return verifyMananger;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerFilter = employees.filter(({ managers }) =>
    managers.includes(managerId));
  const managerFullName = managerFilter.map(
    ({ firstName, lastName }) => `${firstName} ${lastName}`,
  );
  return managerFullName;
}

module.exports = { isManager, getRelatedEmployees };
