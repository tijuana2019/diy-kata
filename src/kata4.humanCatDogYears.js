const humanCatDogYears = humanYears => {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = (humanYears - 2) * 4 + 24;
    dogYears = (humanYears - 2) * 4 + 24;
  }

  return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears;
