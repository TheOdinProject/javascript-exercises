const removeFromArray = function(allArr, ...removeArr) {
    let totalArr = [];
for (const arr of allArr){
    if (removeArr.includes(arr) ){
        continue;
    } 
      totalArr.push(arr);
}
return totalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
