const repeatString = function(str,n) {
    if(n<0)
    return "ERROR"
    let s="";
    while(n)
    {
        s+=str;
        n--;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
