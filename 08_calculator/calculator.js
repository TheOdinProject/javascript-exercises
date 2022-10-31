function add (numberOne, numberTwo) {
	return numberOne + numberTwo; 
}

function subtract (numberOne, numberTwo) {
	return numberOne + numberTwo;; 
}

function sum (array) {
  const result = Array.isArray(array) 
  ? array.reduce((total, current) => total + current, 0): 0;
  return result 
}

function multiply (array) {
  const result = Array.isArray(array) 
  ? array.reduce((total, current) => total * current, 1): 0;
	return result 
}

function power(a, b) {
  return a**b; 
}


function factorial(n) {
 if (n === 0){
   return 1;
 }

 let product = 1; 
 
 for (let i = n; i > 0; i--){
   product *= i;
 }
 return product; 
}
add(0, 0)
add(2, 2)
add(2,6)

subtract(10,4)

sum([])
sum([7])
sum([7, 11])
sum([1,3,5,7,9])

multiply([2,4])
multiply([2,4,6,8,10,12,14])
power(4,3)

factorial(0)
factorial(1)
factorial(2)
factorial(5)
factorial(10)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
