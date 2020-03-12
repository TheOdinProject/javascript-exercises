const leapYears = function(year) {
    if(year%100 == 0){
        if ((year / 100) % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }
    if ( year%4 == 0){
        return true;
    }else {
        return false;
    }
}

module.exports = leapYears
