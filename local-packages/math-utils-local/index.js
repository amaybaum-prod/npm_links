/**
 * Math utilities for local development
 */

function sum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

function multiply(a, b) {
  return a * b;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  sum,
  average,
  multiply,
  factorial
};
