const leapYears = function(year) {
    //Ensure year is divisble by four, not by 100, unless they are also divisible by 400
    if (year % 4 == 0)
        {
          if (year % 100 == 0)
          {
            if (year % 400 == 0) 
              return true;
            return false;
          }
          return true;
        }
};

// Do not edit below this line
module.exports = leapYears;
