const fibonacci = function(nums) {
if(nums <= 0) return "OOPS";

let firstcount = 1;
let secondcount = 0;

for(let i = 2; i <= nums; i++){
    let current = firstcount + secondcount;
    secondcount = firstcount;
    firstcount =  current;
}

return firstcount;
};

// Do not edit below this line
module.exports = fibonacci;
