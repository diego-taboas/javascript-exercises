const add = function(add1, add2) {
	return add1 + add2
};

const subtract = function(subtract1, subtract2) {
	return subtract1 - subtract2
};

const sum = function(sumArr) {
	let total = 0;
  
  for (let i = 0; i < sumArr.length; i++) {
    total += sumArr[i];
  }
  return total;
};

const multiply = function(multiplyArr) {
  let total = 1;

  for (let i = 0; i < multiplyArr.length; i++) {
    total *= multiplyArr[i];
  }
  return total;
};

const power = function(power1, power2) {
	return power1 ** power2
};

const factorial = function(factorialNumber) {
  if (factorialNumber < 0) {
    return "Please enter a positive number. Factorial is not defined for negative numbers."
  }

  let total = 1;

  for (let i = 1; i <= factorialNumber; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
