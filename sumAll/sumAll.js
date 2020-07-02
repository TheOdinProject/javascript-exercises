const sumAll = function(nmin,nmax) {
  if(nmin < 0 || nmax < 0) return 'ERROR';
  if(typeOf nmin!== "number" || typeOf nmax!== "number") return 'ERROR';
  
  if(nmin > nmax){
    const tem = nmin;
    nmin = nmax;
    nmax = tem;    
  }
  let sum = 0;
  for( let i = nmin ; i <= nmax ; i++){
    sum+= i
  }
  return sum;

}

module.exports = sumAll
