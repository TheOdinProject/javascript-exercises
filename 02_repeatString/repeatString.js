// const repeatString = function(string, num) {
//  // this function should return a repeated string
//  let tempString='';
//  if (num < 0) { // for less than zero condition
//      return 'ERROR';
//  }
//  if (num === 0) { // for zero condition
//      return tempString;
//  } 
//  for (let i = 1; i <= num; i++){ // all other conditions
//     tempString +=string;
//  }
//  return tempString;
// };

//using recursion to repeat a string
const repeatString = function (word, times) {
    if (times === 0){
        return '';
    }
    if (times < 0){
        return 'ERROR';
    }
    if (times === 1){
        return word;
    }

    return word + repeatString(word, times - 1);
}
// repeatString(hello,1) output = hello
// repeatString(hello,2) output = hello + hello
// Do not edit below this line
module.exports = repeatString;
