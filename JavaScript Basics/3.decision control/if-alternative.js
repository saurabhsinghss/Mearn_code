let number = 5;
// using ternary operator checking number is even or odd.

let result = number % 2 == 0 ? 'Even' : "Odd";
console.log(`The number is: ${result}`);


// use of guard operator
let userName = "Saurabh";
let defaultName = "John";
console.log(`welcome,${userName || defaultName}`);


// use of default operator
userName = null;
defaultName = "john"
let greet = `welcome,${userName ?? defaultName}`;
console.log(greet);
