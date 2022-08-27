// REPEAT STRING ALGO COMPLETE
//This function is called RepeatString.
// Function takes two parameters: string and number.
const repeatString = function(string, number) {
    //declare variable o heyString and store empty string inside of it.
    let heyString = ""
    // if number input is greater than 0, we are going to run a for loop, starting at index 1. As long as the index is less than number input, we will increment the index by 1. For each increment we make, we will add the input string to the empty string stored inside of heyString. Then we will return heyString. 
    if (number > 0) {
    for (i = 1; i <= number; i++) {
        heyString += string } 
    return heyString
    } 
    //If the number input is equal to zero, we wil return an empty string.
    else if (number === 0){
        return ''
    } 
    // For all instances (if number input is negative, we will return an a string of 'ERROR)
    else {
        return 'ERROR'
    }
};

repeatString('hey', 0)

// Do not edit below this line
module.exports = repeatString;
