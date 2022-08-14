const fibonacci = function(num) {
    let stringToNumber = +num;

    let val1 = 0;
    let val2 = 1;
    let result = stringToNumber;

    if( result > 0 ){
    for(let i = 2; i <= num; i++){
        result = val1 + val2;
        val1 = val2;
        val2= result;
    }

    return result;
 } else{
    return "OOPS";
 }
};

// Do not edit below this line
module.exports = fibonacci;
