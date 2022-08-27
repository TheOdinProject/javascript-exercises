//ALGO 3 - COMPLETE

/*
Pseudocode: 
- If a string is passed as an argument into the function, we need to return the reversed version of the string.
*/

const reverseString = function(string) {
    // Store the length of the string inside the loopNum variable. This variable will be so we now how many loop iterations to perform.
    let loopNum = string.length;
    // Store an empty string inside reversedString. We will add a letter to the reversedString for each iteation. 
    let reversedString = ''
    // Create a for loop. Start at index of 1, and as long as i is below length of string. we will continue the loop. 
    // For each iteration of the loop, we add a single character to the string. This character will be i amout of positions from the end of the string. As I grows, we move towards the front of the string.
    for (i = 1; i <= loopNum; i++) {
        reversedString += string.charAt(string.length - i);
    }
    return reversedString

};

let test = reverseString('hello there')
console.log(test)

// Do not edit below this line
module.exports = reverseString;
