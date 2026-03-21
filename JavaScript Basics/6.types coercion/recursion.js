// factorial using recurssion
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return (num * factorial(num - 1));
}
let input = 10;
console.log(factorial(input));