const sumAll = function(x,y) {
	let max=Math.max(x,y);
	let min=Math.min(x,y);
	let sum=0;
	
	for (let i=min ; i<=max;i++)
	{sum+=i;}
if(min >=0 && typeof(x) == "number" && typeof(y)=="number")
return sum;
else 
	return "ERROR";
}

module.exports = sumAll
