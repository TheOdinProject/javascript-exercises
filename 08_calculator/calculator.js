const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = (nums)=> nums.reduce((total, num)=> total+= num);

const multiply = (...args) => args.reduce((total,arg)=> total *= arg);

const power = (a,b)=> {
	let total=1;
  for(let i = 0; i<b; i++){
    total *= a;
  }
  return total; 
};

const factorial = function(a) {
  let multplyNums =[];
  for(i=a; i>0; i--){
    multplyNums.push(i);
  }
  return(
  multplyNums.reduce((result,num)=> result *= num,1));
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
