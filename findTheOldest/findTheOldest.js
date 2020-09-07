let findTheOldest = function (people) {
  //   people.forEach((person) => {
  //     this.lifeSpan =
  //       person.yearOfDeath - person.yearOfBirth || Date("y") - person.yearOfBirth;
  //   });

  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getPersonAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath
    );
    const currentAge = getPersonAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return currentAge > oldestAge ? currentPerson : oldestPerson;
  });
};

const getPersonAge = (birthYear, deathYear) => {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
};

module.exports = findTheOldest;
