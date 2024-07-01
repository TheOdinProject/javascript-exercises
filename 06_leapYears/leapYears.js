const leapYears = function(year) {
  switch(true) {
    case !(year % 4 === 0):
      console.log('hi');
      break;
    case ((year % 100 === 0) && !(year % 400 === 0)):
      break;
    default: 
      console.log(year % 4);
      return true;
  }
  return false;

};

// Do not edit below this line
module.exports = leapYears;
