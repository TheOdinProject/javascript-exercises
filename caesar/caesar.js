const caesar = function(string, shift) {
    return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};


let codeSets = code => (code < 97 ? 65 : 97);
let mode = (m, n) => (m % n + n) % n;

let shiftChar =(char, shift) => {
    let code = char.charCodeAt();
    
    if((code  >= 65 && code <= 90) || (code >= 97 && code <= 122)){
        return String.fromCharCode(mode(code + shift - codeSets(code), 26) + codeSets(code));
    }
    return char;
};
module.exports = caesar
