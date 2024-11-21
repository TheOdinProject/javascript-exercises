const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (age) {
  return (peopleAge = age.reduce((oldest, current) => {
    let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    let currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
    return currentAge > oldestAge ? current : oldest;
  }));
};

// Do not edit below this line
module.exports = findTheOldest;
