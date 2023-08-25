const findTheOldest = function(people) {
    let res;
    let maxAge = 0;
    let n = people.length;
    for(let i = 0 ;i < n ; i++){
        let birth = people[i].yearOfBirth;
        let death;
        if(people[i].yearOfDeath ==  undefined){
            const d = new Date() ;
            death =  d.getFullYear();
        }
        else {
            death = people[i].yearOfDeath;
        }
        let age = death - birth;
        if(age > maxAge){
            maxAge = age;
            res = people[i];
        }
    }
    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
