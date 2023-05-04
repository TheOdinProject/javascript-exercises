function balancedParenthesis(str){
    const stack = [];
    const openP = {
        "(" : ")",
        "[" : "]",
        "{" : "}" 
    };
    const closeP = {
        ")" : true,
        "]" : true,
        "}" : true
    };

    for (let i = 0; i < str.length; i++){
        const char = str[i];

        if (openP[char]){
            stack.push(char);
        }
        else if (closeP[char]){
            const pop = stack.pop();

            if (!pop || openP[pop] != char){
                return false;
            }
        }
    }

    return stack.length == 0 ? true : false;
}

module.exports = balancedParenthesis;