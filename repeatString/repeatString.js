const repeatString = function(string, number) {
    let repeat = '';
    if(number < 0){
        return("ERROR");
    } else if(number == 0){
        return repeat;
    } else {
        for (let index = 0; index < number; index++) {
             repeat = repeat + string;        
        }
        return repeat;
    }
}

module.exports = repeatString
