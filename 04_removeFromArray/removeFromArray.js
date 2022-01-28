/* const removeFromArray = function(myArray, remArray) {
    return myArray.filter(v => {
        return !remArray.includes(v);
    });
}

testArray = [1,2,3,4,3,1,4,4,6,54,2,1,4,5,3,2];
remArray = [3,4,5,6];
testPrint = removeFromArray(testArray, remArray);
console.log(testPrint);
// Do not edit below this line
module.exports = removeFromArray; */

/* const removeFromArray = function(myArray, num1, num2) {
    // Remove multiple values from array
    arrayLen = myArray.length;
    pos1 = myArray.indexOf(num1);
    pos2 = myArray.indexOf(num2);
    for (i = 0; i < arrayLen; i++) {
        if (pos1 === -1) break;
        myArray.splice(pos1, 1);
        console.log("Length after first loop: " + myArray.length);
        break;
    }
    for (i = 0; i < arrayLen; i++) {
        if (pos2 === -1) break;
        myArray.splice(pos2, 1);
        console.log("Length after second loop: " + myArray.length)
        break;
    }
    return myArray;
} */

const removeFromArray = function(myArray, ...args) {
    arrayLen = myArray.length;
    for (k = 0; k < arrayLen; k++) {
        for (arg of args) {
            inArray = myArray.includes(arg);
            if (inArray == true) {
                index = myArray.indexOf(arg);
                myArray.splice(index, 1);
        }
    }    
    }
return myArray;
}
testArray = [1,2,3,4,3,4,3,2];
testPrint = removeFromArray(testArray, 7, 3, 2, 4, 5, 6, "tomato");
console.log(testPrint);
// Do not edit below this line
module.exports = removeFromArray;
