const add = function(...numbers) {
	let length = numbers.length
  let result=0
  for(let i = 0;i<length;i++)
  {
    result+=numbers[i]
  }
  return result
};

const subtract = function(...numbers) {
  let length = numbers.length
  let result=numbers[0]
  for(let i = 1;i<length;i++)
  {
    result-=numbers[i]
  }
  return result
};

const sum = function(numbers) {
  let length = numbers.length
  let result=0
  for(let i = 0;i<length;i++)
  {
    result+=numbers[i]
  }
  return parseInt(result)
};

const multiply = function(numbers) {
  let length = numbers.length
  let result=numbers[0]
  for(let i = 1;i<length;i++)
  {
    result*=numbers[i]
  }
  return result
};

const power = function(...numbers) {
  let length = numbers[1]
  let result=numbers[0]
  for(let i = 1;i<length;i++)
  {
    result*=numbers[0]
  }
  return result
};

const factorial = function(number) {
  let length = number
  let result=1
  for(let i = 1;i<=length;i++)
  {
    result*=i
  }
  return result
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
