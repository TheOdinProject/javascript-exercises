const sumAll = function(minimum, maximum) {
    let sum=0;
    let min = minimum
    let max = maximum
    if (typeof(min) !== 'number' || typeof(max) !== 'number' || min < 0 || max < 0){
        return 'ERROR'
    } else if(min > max){
        min = maximum
        max = minimum
    }
    for (let i = min;i <= max; i++){
        sum += i
    }
    return sum
};
console.log(sumAll(1,5) === 15?true:false)
// Do not edit below this line
module.exports = sumAll;
