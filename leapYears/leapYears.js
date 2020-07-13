const leapYears = function(year) {
	let leapNonCenturyYear=year%4;
	let leapCenturyYear=year%100;
	let especiallyLeapYear=year%400;
	let result;
	if(leapNonCenturyYear == 0 && leapCenturyYear > 0)
	 {
		 result = true ;
		 }
	else  if(especiallyLeapYear == 0)
	{
	result =true; 
	}
	else 
	{
		
		result = false;
	}
	
	return result;
}

module.exports = leapYears
