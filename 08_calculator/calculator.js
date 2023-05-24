const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function() {
	let args=Array.isArray(arguments[0])?arguments[0]:Array.from(arguments)
  let sum=0
  for (let i=0;i<args.length;i++){
    sum+=args[i]
  } 
  return sum
};

const multiply = function() {
  let args=Array.isArray(arguments[0])?arguments[0]:Array.from(arguments)
  let product=1
  for (let i=0;i<args.length;i++){
    product*=args[i]
  }
  return product

};

const power = function() {
	let args=Array.from(arguments)
  return Math.pow(args[0],args[1])
  
};

const factorial = function() {
  let args= Array.from(arguments)
  let factorial= 1
  for (let i=1;i<=args[0];i++){
    factorial*=i
  } 
  return factorial
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
