
const repeatString = function(repeatText,times1) {
	let fulltext =""
	if(times1 >=0)
	{for (var i = 0 ;i < times1; i++)
	{   
		fulltext +=repeatText;
	}
	return fulltext;}
	else return "ERROR";
}

module.exports = repeatString
