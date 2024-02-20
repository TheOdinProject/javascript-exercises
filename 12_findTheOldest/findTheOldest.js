const findTheOldest = function (peopleArr) {
  //loop over the people arrays and then reduce to YOD - YOB
  let oldestPerson = peopleArr.reduce((person, ageComparison) => {
    let age = getAge(person);
    let ageVal = getAge(ageComparison);
    console.log(age + "\t" + ageVal);
    return age > ageVal ? person : ageComparison;
  });

  console.log(oldestPerson);
  return oldestPerson;
};

const getAge = (person) => {
  let yearOfDeath = person.hasOwnProperty("yearOfDeath")
    ? person.yearOfDeath
    : getCurrentYear();
  return yearOfDeath - person.yearOfBirth;
};

const getCurrentYear = () => {
  const today = new Date();
  let year = today.getFullYear();

  return year;
};

// Do not edit below this line
module.exports = findTheOldest;
