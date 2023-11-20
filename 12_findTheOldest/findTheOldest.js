const findTheOldest = function(people) {
    
        const oldestPerson = people.reduce((oldest, currentPerson) => {
          const currentAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
          const oldestAge = oldest ? (oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth) : -Infinity;
      
          return currentAge > oldestAge ? currentPerson : oldest;
        }, null);
      
        return oldestPerson;
      
};

// Do not edit below this line
module.exports = findTheOldest;
