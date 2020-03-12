let findTheOldest = function (arr) {
    let biggest = -Infinity;
    let age;
    let oldest = {name: ''};
    arr.map(x => {
        if (x.yearOfDeath === undefined) {
            age = 2020 - x.yearOfBirth
        } else {
            age = x.yearOfDeath - x.yearOfBirth
        }
        if (age > biggest) {
            biggest = age;
            oldest.name = x.name;
            return biggest;
        }
    });
    return oldest;
}

module.exports = findTheOldest
