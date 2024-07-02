const getAge = function(birth, death) {
  if (!death || isNaN(death)) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(array) {
  return array.reduce((oldest, current) => {
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    if (currentAge > oldestAge) {
      return current;
    }
    return oldest;
  });
}

// Do not edit below this line
module.exports = findTheOldest;
