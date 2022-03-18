const fibonacci = function(num) {
    const nbr = [0,1]
    if (num < 0){
    console.log ('OOPS');
    return 'OOPS';
    }else{
    for (var i = 2; i <= num; i++) 
    nbr.push(nbr[i-1] + nbr[i-2]);
    }
    console.log(nbr[i-1])
    return nbr[i-1]
    };
  
    //fibonacci(10)
// Do not edit below this line
module.exports = fibonacci;
