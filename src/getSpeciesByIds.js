const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === 0) {
    return [];
  }
  const getSpecies = species.filter((element) => ids.includes(element.id));
  return getSpecies;
}
getSpeciesByIds();

module.exports = getSpeciesByIds;
