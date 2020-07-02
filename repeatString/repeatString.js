const repeatString = function(sourceString, stringCount) {
    //Declare variable/s
    let resultString = '';


    // Create a for loop to repeat the string
    for (let i = 0; i < stringCount; i++) {
        resultString = resultString + sourceString;
    }

    return resultString;


}

module.exports = repeatString