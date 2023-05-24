const findTheOldest = function(people) {
    
    function calculateAge(yearOfBirth, yearOfDeath){
        if (yearOfDeath=== undefined){
            yearOfDeath= new Date().getFullYear();

        }
        return yearOfDeath-yearOfBirth;
    }

    const ages= people.map(year => calculateAge(year.yearOfBirth, year.yearOfDeath));

    const oldest= ages.indexOf(Math.max(...ages));
    return people[oldest];

};

// Do not edit below this line
module.exports = findTheOldest;
