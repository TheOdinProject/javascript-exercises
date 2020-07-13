const removeFromArray = function(arr,value,value2,value3,value4) {
	return arr.filter(function(ele){ return ele !== value && ele !=value2 && ele !=value3 && ele !=value4; });
}

module.exports = removeFromArray
