const palindromes = function (words) {
    let allowed = "abcdefghijklmnopqrstuvwxyz0123456789"
    let chars = words.toLowerCase().split('');
    let filtered = chars.filter(ch => allowed.includes(ch));
    let reversed = filtered.slice().reverse();
    return filtered.join('') === reversed.join('')
};

module.exports = palindromes;
