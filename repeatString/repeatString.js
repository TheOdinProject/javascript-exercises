const repeatString = function(stringOne, n) {
	let output = '';
	if ( n < 0 ) {
		return ('ERROR');
		}
  
	for(let i=0; i < n; i++) {
		output += stringOne;
		
	}
	return(output);
}
repeatString('hey',3);
repeatString('hey',10);
repeatString('hey',1);
repeatString('hey',0);
repeatString('hey',-1);

module.exports = repeatString;

