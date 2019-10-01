const fibonacci = function(fiboThis) { //4
  
let arrayPosition = [];

if (fiboThis <= 0) {
  //console.log("OOPS");
  return "OOPS";
} else {
  for (let i = 0; i < fiboThis; i++) {
    if (i === 0) {
      arrayPosition.push(1);
    } else if (i === 1) {
      arrayPosition.push(1);
    } else {
      arrayPosition.push(arrayPosition[i - 2] + arrayPosition[i - 1]); 
    }
  }
}
// console.log(arrayPosition);
return arrayPosition.pop();

}

module.exports = fibonacci
