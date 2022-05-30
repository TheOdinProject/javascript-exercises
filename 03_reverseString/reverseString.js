const reverseString = function(stringi) {
	let test="";
	let len=stringi.length;
	console.log(len)
	for(i=len-1;i>=0;i--){
	test+=stringi[i];
	 
	}
	return test;

};


// Do not edit below this line
module.exports = reverseString;
