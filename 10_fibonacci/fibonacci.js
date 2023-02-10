const fibonacci = function(n) {
    if((n)<0)
    return "OOPS";
    let a=0,b=1,c;
    while((n))
    {
        c=a+b;
        a=b;
        b=c;
        n--;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
