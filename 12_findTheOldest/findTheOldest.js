
const findTheOldest = function(list) {
    let length = list.length
    let highestAge=0
    let oldest;
    for (person of list)
    {
        let age = person.yearOfDeath - person.yearOfBirth
        if(age > highestAge && person.yearOfDeath != undefined)
        {
            highestAge = age
            oldest = person
        }
    }
    return oldest
};
// Do not edit below this line
module.exports = findTheOldest;
