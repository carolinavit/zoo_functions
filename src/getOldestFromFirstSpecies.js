const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((element) => element.id === id).responsibleFor[0];
  const residentSpecie = species.find((index) => index.id === firstSpecie).residents;
  let oldestAge = 0;
  let oldestInfo = [];
  residentSpecie.forEach(({ name, sex, age }) => {
    if (age > oldestAge) {
      oldestAge = age;
      oldestInfo = [name, sex, age];
    }
  });
  return oldestInfo;
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
