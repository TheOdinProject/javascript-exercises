const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(a) {
	let s=parseInt(0);
  for(let i=0;i<a.length;i++)
  {
    s+=parseInt(a[i]);
  }
  return s;
};

const multiply = function(a) {
  let ans=1;
  for(let i=0;i<a.length;i++)
  {
    ans*=a[i];
  }
  return ans;
};

const power = function(x,y) {
  return Math.pow(x,y)
};

const factorial = function(x) {
	let f=1;
  while(x)
  {
    f*=x;
    x--;
  }
  return f;
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
