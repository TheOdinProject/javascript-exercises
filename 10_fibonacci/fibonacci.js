const fibonacci = function(n) {
    //1, 1, 2, 3, 5, 8
    //n1 n2 n3 n4 n5
    //n4 = n3+n2
    //n3 = n2+n1
    //n2 = n1
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
    };

// Do not edit below this line
module.exports = fibonacci;
