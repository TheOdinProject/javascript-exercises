const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log ('true')
        return (true)
    }else if (year % 100 === 0 && year % 400 === 0){
      console.log ('true')
      return (true)
    }else {
     console.log ('false')
      return (false)
    }
    }; 
    leapYears(1984)
// Do not edit below this line
module.exports = leapYears;
