function fibonacci (fiboThis) {

  let arrayPosition = [];
  
  // console.log(fiboThis);
  if (fiboThis <= 0) {
    console.log("OOPS");
  } else {
    for (let i = 0; i < fiboThis; i++) {
      // insert arrayPosition1,1,2,3 into array
      if (i === 0) {
        arrayPosition.push(1);
      } else if (i === 1) {
        arrayPosition.push(1);
      } else {
        arrayPosition.push(arrayPosition[i - 2] + arrayPosition[i - 1]); // p2
      }
    }
  }
  console.log(arrayPosition.pop());

} 
fibonacci(4);
