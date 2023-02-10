const findTheOldest = function(obj) {
    return obj.reduce((acc,curr)=>{
         let birthCurr=curr.yearOfBirth
        let deathCurr=("yearOfDeath" in curr)?curr.yearOfDeath:(new Date().getFullYear());
        let diffCurr=(deathCurr-birthCurr)
        let birthAcc=acc.yearOfBirth
        let deathAcc=("yearOfDeath" in acc)?acc.yearOfDeath:(new Date().getFullYear());
        let diffAcc=(deathAcc-birthAcc) 
        acc=(diffCurr>diffAcc)?curr:acc;
        return acc;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
