const sumAll = function(a,b) {
    let sumIntegers= a+b;
    for (let i=a+1; i<b; i++){
        sumIntegers += i;
        
    }
    return sumIntegers;

};

// Do not edit below this line
module.exports = sumAll;
