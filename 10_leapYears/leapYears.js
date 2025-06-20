const leapYears = function(theYear){
        
        if(theYear % 4 == 0 && theYear % 100 != 0 || theYear % 400 === 0){
            return true;
        }

        else return false;

    }

leapYears(1996);

leapYears(1997);

leapYears(34992);

leapYears(1900);

leapYears(1600);

leapYears(700);

// Do not edit below this line
module.exports = leapYears;

