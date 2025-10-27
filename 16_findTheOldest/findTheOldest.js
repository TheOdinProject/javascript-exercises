const findTheOldest = function(arr) {
    let oldest = 0;
    let oldestName;

    for(person of arr){
        let deathYear = person.yearOfDeath ? person.yearOfDeath: 2025;
        let age = deathYear - person.yearOfBirth;

        if(age > oldest){
            oldest = age;
            oldestName = person;
        } 
    }
    return oldestName;

};


// Do not edit below this line
module.exports = findTheOldest;
