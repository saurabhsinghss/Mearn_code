function greet() {
  console.log('Good Morning User');
}
// greet();
// greet();


// return values between 1 to 4
function getRandomNumber() {
  let randomOption = Math.floor(Math.random() * 4 + 1);
  return randomOption;
}

// let myNumber = getRandomNumber();
// console.log(`I got random number is:${myNumber}`);


function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(getSum(2, 3));
