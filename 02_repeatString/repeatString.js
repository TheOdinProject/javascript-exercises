const repeatString = function(stringi,times) {
	if(times<0){
	return 'ERROR'}
	else{
	let i;
	let res='';	
for(i=0;i<times;i++){
	res+=stringi;}
return res;
	}	
};

// Do not edit below this line
module.exports = repeatString;
