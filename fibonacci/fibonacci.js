const fibonacci = function(num) {
  let a=0 ,b=1,fib=0;
    for(let i=2;i<=n;i++){
      fib=a+b;
      a=b;
      b=fib;
    }
   return fib;
}

module.exports = fibonacci
