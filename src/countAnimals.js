const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function resultAnimalSex(animal) {
  let count = 0;
  let getResidents = [];
  species.forEach((element) => {
    if (element.name === animal.specie) {
      getResidents = element.residents;
    }
  });
  getResidents.forEach((index) => {
    if (index.sex === animal.sex) {
      count += 1;
    }
  });
  return count;
}

function countAnimals(animal) {
  const resultCount = {};
  species.forEach(({ name, residents }) => {
    resultCount[name] = residents.length;
  });
  if (animal === undefined) {
    return resultCount;
  }
  if (animal.sex) {
    return resultAnimalSex(animal);
  }
  return resultCount[animal.specie];
}
countAnimals();
module.exports = countAnimals;
