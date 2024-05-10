const reverseString = function(string) {
    //Make variable to store reversed string
  let reverseStringArray = '';
  //Start at end of old string and push invidual chars to new string container in reverse order
  for(i=string.length-1; i >= 0; i--)
    {
        reverseStringArray += string[i];
    }
    return reverseStringArray;
};

// Do not edit below this line
module.exports = reverseString;
