const leapYears = (year) => {

    const modulo = year % 4;
        if (modulo === 0 ){
            if(year % 100 === 0){
                if (year % 400 === 0){
                    return true;
                } else {
                    return false;
                }
            } 
            return true;
   
        } 
    return false;    
};

module.exports = leapYears;

