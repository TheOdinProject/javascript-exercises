const leapYears = function(year) {
    //
    //Not Divisible by 100  && /4: leap year
    //Div by 100 & 400, Y
    if ( (year%100 != 0) && (year%4 == 0)){
        return true;
    }
    else if ((year%100 == 0) && (year%400 == 0)){
        return true;
    }
    return false;

};


console.log(leapYears(1997));
// Do not edit below this line
module.exports = leapYears;
