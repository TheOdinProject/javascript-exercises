const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

const findTheOldest = function(people) {

      let currentDate = new Date().getFullYear();

      return people.reduce((oldest, person) => {
      const age = person.yearOfDeath 
        ? person.yearOfDeath - person.yearOfBirth
        : currentDate - person.yearOfBirth;


      const oldestAge = oldest.yearOfDeath
        ? oldest.yearOfDeath - oldest.yearOfBirth
        : currentDate - oldest.yearOfBirth;


      let findOldest = age > oldestAge ? person : oldest;

      return findOldest;
      
    });

};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
