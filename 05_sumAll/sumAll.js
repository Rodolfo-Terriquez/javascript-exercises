const sumAll = function(a, b) {
    let countFrom;
    let countTo;
    //check for negative numbers
    if (a < 0 || b < 0) { 
        return 'ERROR';
    //check for both being numbers
    } else if (typeof(a) == 'number' && typeof(b) == 'number') {
        if (a < b) {
            countFrom = a;
            countTo = b;
        } else {
            countFrom = b;
            countTo = a;
        }
        let finalSum = 0;
        for (let i = countFrom - 1; i < countTo + 1; i++) {
            finalSum += i;
        }
        return finalSum;
    //otherwise return ERROR
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
