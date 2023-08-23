const repeatString = function(text , num) {
 if(num < 0) return "ERROR";
 let res = "";
 for(let i = 1 ;i <= num ; i++){
    res += text;
 }
 return res;
};

// Do not edit below this line
module.exports = repeatString;
