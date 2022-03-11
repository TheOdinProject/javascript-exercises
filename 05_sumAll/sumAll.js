const sumAll = function(num1, num2) {
    let total = 0;
    let a = [];
    let b = [];
    if (num1 < num2) {
        a = num1;
        b = num2;
}else {
        a = num2;
        b = num1;
    }
    if (a <0 || typeof a == 'string' || typeof b == 'string' || typeof a == 'object' || typeof b == 'object'){
      console.log('ERROR');
      return 'ERROR'
    
    }
    for (i = a; i <= b; i++){
        total += i;
    
    }
 // console.log (a)
    console.log(total)
    return total
    };
    sumAll(5, 7)
// Do not edit below this line
module.exports = sumAll;
