// Problem: Write a function that determines whether or not a given string is a palindrome.
// Framework
// 	1. Understand the problem
// 		○ Given: string
// 		○ Output: True/False
// 		○ Examples:
// 			§ Racecar
// 			§ A car, a man, a maraca.
// 		○ Assumptions:
// 			§ Ignore punctuations
// 			§ Ignore capitalization
// 	2. Strategize: Visually 
//
// 	3. Strategize: Written
// 		○ Create array A for given string
// 		○ Sanitize array
// 			§ Remove punctuation, spacing, capitalization
// 		○ Create a copy of array A reversed
// 		○ Store it in Array B
// 		○ Compare Array A & B



const palindromes = function (input){
    let startString =input.toLowerCase().replace(/[ ,.!?;:'"()\-_]/g,'').split("");
    const endString = startString.map(x=>x); //If did = startString, endString REFERENCES start string, we dont want that so use map
    console.log(startString);
    endString.reverse();
    console.log(startString);
    console.log(endString);
    return startString.toString() === endString.toString();
};

palindromes('ZZZZ car, a man, a maracaz.')
// palindrome("racecar");
// palindrome("Racecar");
// palindrome("A car, a man, a maraca.");














// Do not edit below this line
module.exports = palindromes;
