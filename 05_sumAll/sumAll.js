const sumAll = function(n1 , n2) {
    let a = 1;
    if(n1 < 0 || n2 < 0 || typeof(n1) != typeof(a) || typeof(n2) != typeof(a))
        return 'ERROR';
    let sum = 0
    if(n2 < n1){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
    while(n1 <= n2){
        sum += n1;
        n1++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
