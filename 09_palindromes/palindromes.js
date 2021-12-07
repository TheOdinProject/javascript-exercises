const palindromes = function (initialWord) {
    let re = /[^A-Za-z0-9]/g;
    let cleanString = initialWord.replace(re, '').toLowerCase(); 
    let reverseString = cleanString.split('').reverse().join(''); 
    console.log('old word: ' +cleanString);
    console.log('new word: ' +reverseString);
    return cleanString === reverseString;
  
   
};

// psuedocode
//A palindrome is a string that is spelled the same both forwards and backwards,
// write logic to strip out the punctuation or word breaks
// write logic that will compare the  one character at a  time for a match. if there is a mismatch, then it is not a palindromes.




// Do not edit below this line
module.exports = palindromes;
