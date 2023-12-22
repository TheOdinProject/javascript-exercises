const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};


let arrayDemo = [1, 2, 3, 4, 5];
let sumNumbers = 0;
for (i = 0; i < arrayDemo.length; i++){
  sumNumbers += arrayDemo[i];
}

// const sum = function(array) {
//   let sumNr = 0;
//   for(i =0; i < array.length; i++){
//     sumNr+= array[i];
//   }
//   return sumNr;
// };

const sum = function(array) {
    return array.reduce((total, value) => total + value , 0);
};


const multiply = function(array) {
  return array.reduce((value1, value2) => value1 * value2);
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

let arrayN = [1, 2, 3, 4, 5];
let sumN = 0;
for (i = 0; i < arrayN.length; i++){
  sumN += arrayN[i];
}


const factorial = function(num) {
  let total = 1;
  for(i=1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
