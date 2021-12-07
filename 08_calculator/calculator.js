const add = function(input1, input2) {
	return input1+input2;
};

const subtract = function(input1, input2) {
	return input1 - input2;
};

const sum = function(input1) {
  let total = 0;
  input1.forEach( (item) => {
    total +=item;
  });
  return total;
};

const multiply = function(input1) {
  let total = 1;
  input1.forEach( (item) =>{
    total *=item;
  });
  return total;
};

const power = function(input1, input2) {
	//return Math.pow(input1, input2);
  return input1 ** input2
};

const factorial = function(input1) {
	var result = input1;
  if (input1 === 0 || input1 === 1){
    return 1;
  }

  while (input1 > 1){
    input1--;
    result = result * input1;
  }
  return result;
    
};
//2!


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
