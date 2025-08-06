const findTheOldest = function(people) {

    let currentDate = new Date();
    
    people.forEach( person => {
        let dod = person.yearOfDeath === undefined ? currentDate.getFullYear() : person.yearOfDeath;
        let age = dod - person.yearOfBirth;
        person.age = age;
    });

    let oldestAge = 0;
    let oldestPerson = {};

    for (person of people){
        if (person.age > oldestAge){
            oldestAge = person.age;
            oldestPerson.name = person.name
            oldestPerson.age = person.age
        }
    }

    return oldestPerson;
};

    /*
    Understanding the problem

    I have 3 objects with people's info. I need to calculate their ages and
    return the name of the oldest person


    Plan:
    I need to go through each object and access the birth and death dates, 
    and calculate their current age, store their age in the people object
    

    Pseudocode
    LOOP through each element in the people array
    GET people's age calculating DOD - DOB
    IF DOD doesn't exist it equals to current year 2025
    Save people's age in the people of object

    */

// Do not edit below this line
module.exports = findTheOldest;
