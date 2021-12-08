let callNum = 0;    
    

const findTheOldest = function(arry) {
    let age = 0;
    let oldest = {
        age: 1,
    };
    console.log("Round Num: " + callNum);
    for (i = 0; i < arry.length; i++) {
        if (!arry[i].yearOfDeath){
            let currentYear = new Date().getFullYear();
            age = currentYear - arry[i].yearOfBirth;
            arry[i].age = age;
            console.log("Carly's Age " + arry[i].age)
        }
        else {
            age = arry[i].yearOfDeath - arry[i].yearOfBirth;
            arry[i].age = age;
        }
    }
    for (i = 0; i < arry.length; i++) {
        // if (arry[i].age > arry[i+1].age && arry[i].age >= oldest.age) {
        //     oldest = arry[i];
        //     console.log('true');
        //     console.log(oldest);
        // }
        if (oldest.age > arry[i].age) {
            oldest = oldest;
            console.log('false');
            console.log(oldest);
        }
        else if (oldest.age < arry[i].age) {
            oldest = arry[i];
            console.log('false if');
            console.log(oldest);
        }
    }
    callNum++;
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
