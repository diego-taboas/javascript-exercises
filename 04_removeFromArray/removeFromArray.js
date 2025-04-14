const removeFromArray = function(array, ...args) {
    const argsSet = new Set(args);
    return array.filter((num) => !argsSet.has(num));
};

// Do not edit below this line
module.exports = removeFromArray;
