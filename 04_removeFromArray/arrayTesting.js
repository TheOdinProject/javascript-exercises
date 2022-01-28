const myArray = [1,2,3,1,1,1,1];
console.log(myArray);

//const myArray2 = myArray[2];
//console.log(myArray2);

const a = 1;
const arrayLen = myArray.length;
const index = [];
let pos = 0;

while (pos < arrayLen) {
    pos = myArray.indexOf(a, pos);
    if (pos === -1) break;
    index.push(pos);
    pos = pos + 1;
}

console.log("The index is: " + index);

for (var i = 0; i < arrayLen; i++) {
    console.log(i);
    myArray.splice(index[i, 1]);
}

console.log(myArray);
