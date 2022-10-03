const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimals = species.find((element) => element.name === animal);
  return getAnimals.residents.every((index) => index.age >= age);
}
console.log(getAnimalsOlderThan('lions', 4));
module.exports = getAnimalsOlderThan;
