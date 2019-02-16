const repeatString = function(repeat,j) {
	if (j<0){
		return 'ERROR';
	}else{
		var str = '';
		for (var i=0; i<j; i++){
			str=str+repeat;	
			}
	return str;
		}
	}

module.exports = repeatString
