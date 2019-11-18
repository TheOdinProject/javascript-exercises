const leapYears = function(year) {

return ( (year % 4 == 0) && (year % 100 !== 0) || ( year % 400 == 0) ); 
	
 
   
  

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
}
module.exports = leapYears
