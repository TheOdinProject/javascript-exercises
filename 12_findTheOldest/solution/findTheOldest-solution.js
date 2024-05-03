const getAge = function (person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side evaluates to undefined or null
  // if the left side has any other value, no assignment happens
  // here, we use ??= to set the current year for our subtraction below only if there is no year of death
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  // Sort the people from oldest to youngest
  return people.sort(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  )[0];
};

module.exports = findTheOldest;
