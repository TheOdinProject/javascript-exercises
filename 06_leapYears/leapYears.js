const leapYears = function(x) {
    if ((x%4==0 && x%100) || (x%4==0 && x%100==0 && x%40==0))
    return true;
    else
    return false;
};

// Do not edit below this line
module.exports = leapYears;
