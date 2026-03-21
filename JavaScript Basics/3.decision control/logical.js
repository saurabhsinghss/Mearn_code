console.log("And opertor:")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Or operator:")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log("Not operator:");
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// let number = 8;
// if (number > 0) {
//   console.log("number is positive");
//   if (number % 2 === 0) {
//     console.log("Number is even");
//   }
//   else {
//     console.log("Number is odd");
//   }
// }
// else if (number < 0) {
//   console.log("Number is negative");
// }
// else {
//   console.log("Number is zero");
// }


let num = -3;
if (num > 0 && num % 2 === 0) {
  console.log("positive and even");
}
else if (num > 0) {
  console.log("positive and odd");
}
else if (num < 0) {
  console.log("number is negative");
}
else {
  console.log("number is zero");
}