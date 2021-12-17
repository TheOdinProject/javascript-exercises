const sumAll = function(...theArgs) {
    /* - make sure you pay attention to the function parameters
    Test that the inputs are +ve integers
    */
    const result = theArgs.every(e => Number.isInteger(e) && e > 0);
    //Intialize summation variable
    var finalSum = null;
    if(result) {
        // const inMin = ;
        // const inMax = ;
        for (i = Math.min(...theArgs); i <= Math.max(...theArgs); i++) {
            // - on each iteration add the number to the sum
            finalSum += i;
        }
        // - return the sum after finishing the loop
        return finalSum
    } else {
        return 'ERROR';
    }
    

};

// Do not edit below this line
module.exports = sumAll;
