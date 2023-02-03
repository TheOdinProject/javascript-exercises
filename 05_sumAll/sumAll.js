const sumAll = function(start, end){
  if(end<0 || start<0 || typeof(start) !== "number" || typeof(end) !== "number"){
    return "ERROR"
  }else{
    if(end < start){
      end1 = end
      end2 = start
    }else{
      end1 = start
      end2 = end
    }
    return (end1 + end2)*(end2/2)}
  };


//   let total = 0;
//   for (let i = start; i <= end; i++) {
//    total = total + i;
  
//    }
//    return total;
// };
 






// Do not edit below this line
module.exports = sumAll;
