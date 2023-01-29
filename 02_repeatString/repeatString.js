const repeatString = function(str, num) {
    // Create a variable to hold the string you're going to return
    // create a loop that repeats the given number of times
    // add the given string to the result on each loop.
    
    str = "hey";
    num = 35;
    multiStr = "";

    for (let i = 0; i != num; i++) {
        multiStr += str;
    }
    return multiStr;
};

// Do not edit below this line
module.exports = repeatString;
