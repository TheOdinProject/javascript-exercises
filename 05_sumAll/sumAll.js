/*function greater(num1, num2){
   if(num1 > num2){
    return num1;
   } else if(num2 > num1){
   return num2;
   }
  }
  function least(num1, num2){
   if(num1 < num2){
    return num1;
   } else if(num2 < num1){
   return num2;
   }
  }
*/

const sumAll = function(num1, num2) {
    let sum = 0;
      if( Math.sign(num1 || num2) !== -1 && typeof(num1 && num2) === "number" ){
    const least = (num1,num2) =>{
      if(num1 < num2){
      return num1;
     } else if(num2 < num1){
      return num2;
     }
   }
    
    const greater = (num1,num2) =>{
      if(num1 > num2){
          return num1;
        } else if(num2 > num1){
         return num2;
        }
     }
     
 for( let i = least(num1,num2); i <= greater(num1,num2); i++){
    sum+=i;
 }
 return sum;
} else{
   return "ERROR";
}};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
