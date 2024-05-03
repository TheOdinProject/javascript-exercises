const getAge = function (person) {
  // The nullish coalescing assignment operator
  // evaluates to the right hand side if the left hand side is undefined
  // Else it evaluates to the left hand side
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (array) {
  // Sort the people from oldest to youngest
  return array.sort(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  )[0];
};

module.exports = findTheOldest;
