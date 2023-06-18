// Take in a word
// Split it into an array
// Pop array and store in a new array
// Continue until array is done
//Do without string reverse method

const reverseString = function(word) {
    // Split it into an array
    const ogStringArray = word.split("");
    const length_ogStringArray = ogStringArray.length;
    const reverseStringArray = [];
    // console.log(charArray);
    for (let i=0; i < length_ogStringArray; i++){
        reverseStringArray.push(ogStringArray.pop());
    }
    return(reverseStringArray.join(""));
};

// reverseString("Roberra Aklilu");

// Do not edit below this line
module.exports = reverseString;
