const findTheOldest = function(arr) {
    let oldestPerson = arr[0];
    for (const i in arr) {
        oldestPerson = setOldest(arr[i], oldestPerson)
    }
    return oldestPerson;
};

function setOldest(person1, person2) {
    return getAge(person1) > getAge(person2) ? person1: person2;
}
// use current year if no death year
function getAge(obj) {
    return Object.hasOwn(obj, 'yearOfDeath')? obj.yearOfDeath - obj.yearOfBirth : new Date().getFullYear() - obj.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;

