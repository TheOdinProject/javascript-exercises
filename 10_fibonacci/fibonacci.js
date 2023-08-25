const fibonacci = function(n) {
    if(n < 0) return "OOPS";
    if(n === 0) return 0;
    if(n <= 2) return 1;
    let myArray = new Array(n);
    myArray[0] = 1;
    myArray[1] = 1;
    for(let i = 2 ; i < n ;i++){
        myArray[i] = myArray[i - 1] + myArray[i - 2];
    }
    return myArray[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
