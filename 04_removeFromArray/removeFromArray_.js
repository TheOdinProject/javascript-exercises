const removeFromArray = function(myArray, remArray) {
    index = [];
    //myArray = myArray.sort();
    a1Len = myArray.length;
    console.log("Length 1: " + a1Len);
    a2Len = remArray.length;
    console.log("Length 2: " + a2Len);
    pos1 = 0;
    pos2 = 0;

    while (pos2 < a2Len) {
        while (pos1 < a1Len) {
            pos1 = myArray.indexOf(remArray[pos2], pos1);
            console.log("Position 1: " + pos1);
            console.log("Position 2: " + pos2);
            if (pos1 === -1) break;

            myArray.splice(pos1, 1);
            pos1 = pos1 + 1;
        }
        pos2 = pos2 + 1;
    }
    
    //index.push(myArray.indexOf(toRemove));
    return myArray;
}

testArray = [1,2,3,4];
remArray = [3,4];
testPrint = removeFromArray(testArray, remArray);
console.log(testPrint);
//console.log(pos);
//console.log(testArray.length);
// Do not edit below this line
module.exports = removeFromArray;
