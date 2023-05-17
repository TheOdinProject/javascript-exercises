const reverseString = function(string) {
    let num = string.length;
    let lastLetter = string.slice(-1);
    let secondLastLetter = string.slice(-2, -1);
    let thirdLastLetter = string.slice(-3, -2);
    let fourthLastLetter = string.slice(-4, -3);
    let fifthLastLetter = string.slice(-5, -4);

    /* for (let i = 0; i <= num; i++) { */
        return(lastLetter + secondLastLetter + thirdLastLetter + fourthLastLetter + fifthLastLetter)



};

// Do not edit below this line
module.exports = reverseString;
