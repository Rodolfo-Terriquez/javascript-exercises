const reverseString = function(string) {
    let stringArray = string.split('');
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
