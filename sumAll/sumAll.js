const sumAll = function(a,b) {
    if (typeof(a) != "number" || typeof(b) != "number"  || a<0 || b<0){
        return "ERROR"
    }else{
    if(a<b){
        var S = a;
        for(var i = a+1;i<=b ;i++){
            S=S+i;
            }
        }else{
            var S = b;
            for(var i = b+1;i<=a ;i++){
            S=S+i;
            }
        }
    }
    return S;
    }
module.exports = sumAll
