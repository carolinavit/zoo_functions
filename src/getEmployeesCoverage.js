const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function objInfoEmployee(object) {
  const result = employees.find((element) => (element
    .lastName === object.name || element.id === object.id || element.firstName === object.name));

  if (result === undefined) throw new Error('Informações inválidas');

  const filterSpecie = species.filter((index) => result.responsibleFor.includes(index.id));

  return {
    id: result.id,
    fullName: `${result.firstName} ${result.lastName}`,
    species: filterSpecie.map(({ name }) => name),
    locations: filterSpecie.map(({ location }) => location),
  };
}

function objInfoAllEmployee() {
  return employees.map((element) => objInfoEmployee({ id: element.id }));
}

function getEmployeesCoverage(object) {
  if (!object) {
    return objInfoAllEmployee();
  }
  return objInfoEmployee(object);
}
module.exports = getEmployeesCoverage;
