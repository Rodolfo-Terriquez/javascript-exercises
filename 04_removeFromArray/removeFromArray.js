const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (toRemove.includes(array[i])) {
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
};


module.exports = removeFromArray;
