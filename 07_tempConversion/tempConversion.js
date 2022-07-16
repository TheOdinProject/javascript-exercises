const ftoc = function(fahr) {
 //let converted = parseInt(fahr); 
 let converted = (fahr - 32) * 5/9;
 return Math.round(converted * 10) / 10;
};

const ctof = function(cel) {
  //let converted = parseInt(cel);
  let converted = (cel * 9/5) + 32;
 return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
