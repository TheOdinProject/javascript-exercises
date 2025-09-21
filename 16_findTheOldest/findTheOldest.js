const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
    let death = person.yearOfDeath || currentYear;
    let age = death - person.yearOfBirth;

    let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return age > oldestAge ? person: oldest;
    })
};

module.exports = findTheOldest;
