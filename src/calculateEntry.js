const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const filterChild = entrants.filter((element) => element.age < 18).length;
  const filterAdult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const filterSenior = entrants.filter((element) => element.age >= 50).length;
  return {
    child: filterChild,
    adult: filterAdult,
    senior: filterSenior,
  };
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, senior, child } = prices;
  const resultEntrants = Object.values(countEntrants(entrants));
  return (child * resultEntrants[0]) + (adult * resultEntrants[1]) + (senior * resultEntrants[2]);
}

module.exports = { calculateEntry, countEntrants };
