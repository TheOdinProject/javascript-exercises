const findTheOldest = function(people){
    peopleSorted = people.sort((a, b)=>
        (getAge(a) > getAge(b)) ?
            -1:
            1
    );
    return(peopleSorted[0]);
}

function getAge(person){
    let death = person.yearOfDeath;
    if(!death){
        death = new Date().getFullYear();
    };
    return death - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
