const repeatString = function(string, repeater) {
    if(repeater<0){
        return "ERROR";
    }
    let repeated_string ='';
    for ( i = 0; i < repeater; i++ ){
        repeated_string += string;
    }
    return repeated_string;
};

// repeatString("hey",3);
// console.log('hello');
// Do not edit below this line
module.exports = repeatString;
