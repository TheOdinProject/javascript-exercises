const reverseString = function(str) {
        let splitString = str.split("");

        let reverseArray = splitString.reverse(); 
     
        let joinArray = reverseArray.join(""); 
        
        return joinArray; 
    }
     
    



module.exports = reverseString
