const palindromes = function (str) {
    const len = Math.floor(str.length / 2);
    const newStr = str.toLowerCase().replace(/[.,\s\/#!$%^&*;:{}=\-_`~()]/g,"");

    for (let i = 0; i < len; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
