const leapYears = function(years) {

    if(years % 4 == 0 && years % 100 != 0){
        isLeapYear = true;

    }else if(years % 400 == 0){
        isLeapYear = true;
        
    }else{
        isLeapYear = false;
    }
    return isLeapYear;
}

module.exports = leapYears
