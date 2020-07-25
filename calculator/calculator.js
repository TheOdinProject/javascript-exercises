function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (a) {
	let sum=0
	if(a){
         sum+=a;
	}
	return sum;
}

function multiply (a,b) {
	return a*b;
}

function power(a,b) {
	return Math.pow(a,b)
	
}

function factorial(a) {
	if(a==o)return;
	let fact=1;
	for(let i=n ;i<0 ;i--)
	{ 
	  fact*=1;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
