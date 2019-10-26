const sumAll = function(i, n) {{

if (i < 0) {
  return ('ERROR');
}
if (typeof n === 'string') {
  return ('ERROR');
}
if (typeof n === 'object'){
  return ('ERROR');
}
if (i > n){
  ([i,n] = [n,i]);
}
var myNum = 0;

for (i; i <= n; i++) {
 myNum = myNum + i;
}
return (myNum);
}
sumAll(1,4);
sumAll(123,1);
sumAll(1,4000);
sumAll(-10,4);
sumAll(10,"90");
sumAll(10,[90,1]);
}

module.exports = sumAll
