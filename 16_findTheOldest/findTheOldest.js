const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldestPerson,person)=>{
        let oldestAge;
        if (!oldestPerson.yearOfDeath ) oldestAge = currentYear - oldestPerson.yearOfBirth;
        else oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

        let currentAge;
        if (!person.yearOfDeath) currentAge = currentYear - person.yearOfBirth;
        else currentAge = person.yearOfDeath - person.yearOfBirth;

        return oldestAge < currentAge ? person : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
