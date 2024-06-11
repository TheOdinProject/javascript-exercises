const findTheOldest = function (array) {
  // Function to calculate age
  const calculateAge = (yearOfBirth, yearOfDeath) => {
    const currentYear = new Date().getFullYear();
    return (yearOfDeath || currentYear) - yearOfBirth;
  };

  // Find the oldest person
  return array.reduce((oldest, person) => {
    const personAge = calculateAge(person.yearOfBirth, person.yearOfDeath);
    const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);

    return oldestAge > personAge ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
