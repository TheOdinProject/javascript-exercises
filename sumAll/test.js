function sumAll(first, second) {

  if(first < 0 || typeof(second) === 'string' || Array.isArray(second) ) {
    return "ERROR";
  } else {
    let sum = 0;
    if (first < second) {
      for (let i = first; i <= second; i++) {
        sum = sum + i;
        // console.log(sum);
      }
    } else {
      for (let i = second; i <= first; i++) {
        sum = sum + i;
        // console.log(sum);
      }
    }
    return sum;
  }
  
}
// let result = sumAll(1,4);
console.log(sumAll(10,[90,1]));
