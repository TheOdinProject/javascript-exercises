const leapYears = function(year) {
    //Check if the year contains 4 digits:
    const divisibleByFour = year % 4;
    const divisibleByHundred = year % 100;
    const divisibleByFourHundred = year % 400;
    //If there is a remainder after dividing it by 4, it is not a leap year
    if (divisibleByFour !== 0){
        return false;
    }
    //If there is a remainder after dividing it by 100, it is a leap year
    else if (divisibleByHundred !== 0){
        return true;
    }
    //If the year ends in two zeros and there is a remainder after dividing by 400, it is not a leap year
    else if (divisibleByFourHundred !== 0){
        return false;
    }
    else {
        return true;
    }
    }
    // Do not edit below this line
    module.exports = leapYears;
    