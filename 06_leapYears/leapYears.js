const leapYears = function(num) {
    if (num % 4 === 0 && !(num % 100 === 0)){
        return true;
    } else if (num % 400 === 0 && !(num % 100 === 0)){
        return true;
    } else if (num % 400 === 0){
         return true;
    } else {
        return false;
    }

};

leapYears(2000) 
leapYears(1985)

module.exports = leapYears;


