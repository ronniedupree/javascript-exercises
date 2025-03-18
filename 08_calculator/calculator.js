const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
    let total = 0;
    for (let num of arr) {
      total += num;
    }
	return total;
};

const multiply = function(arr) {
    let total = 1;
    for (let num of arr) {
      total *= num;
    }
    return total;
};

const power = function(num, pow) {
	return num**pow;
};

const factorial = function(n) {
	if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
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
