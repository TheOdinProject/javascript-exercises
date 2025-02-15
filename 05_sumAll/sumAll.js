const sumAll = function(firstInteger, secondInteger) {
    //Create a variable for the sum
    let sum = 0;
    //Check if the arguments passed are not float integers, negative, strings
    //or other objects and shouldnt be in an array
    if ((!Number.isInteger(firstInteger)) || (!Number.isInteger(secondInteger)) || (firstInteger < 0) || (secondInteger < 0)){
        return 'ERROR';
   }
   //Check if the first argument is less than the second so we can add the sum accordingly
    else if (firstInteger < secondInteger){
        for (let i = firstInteger; i <= secondInteger; ++i){
            sum += i;
        }
    }
    //Check if the second argument is less than the first so we can add the sum accordingly
    else if (secondInteger < firstInteger){
        for (let i = secondInteger; i <= firstInteger; ++i){
            sum += i;
        }
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
