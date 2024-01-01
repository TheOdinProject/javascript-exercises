const findTheOldest = function(array) {
    return array.reduce((prev, curr)=>{
        const prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath)
        const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath)
        return (prevAge < currAge)?curr:prev;
    });
    
};

function getAge(birth, death){
    if (!death){
        death = new Date().getFullYear()
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
