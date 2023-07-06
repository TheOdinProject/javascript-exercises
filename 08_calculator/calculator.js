const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = (nums)=>{
  let total=0;
	for(let i in nums){
    total += nums[i];
  }
  return total;
};

const multiply = (...args) => {
  let total=1;
  let i=0;
  for(let i in args){
    // console.log("i: "+i+" args[i]: "+args[i]);
    total *= args[i];
    i++;
  }
  console.log(total);
  return total;

};

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
