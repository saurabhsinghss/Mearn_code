//Normal Function
function add1(first, second) {
  return first + second;
}
console.log(add1(4, 6));

// Anonymous function
let add2 = function (first, second) {
  return first + second;
}
console.log(add2(9, 5));


// Arrow function
const add3 = (first, second) => {
  return first + second;
}
console.log(add3(9, 2));

// in arrow function if you have only one argument then 
const square = num => {
  return num * num;
}
console.log(square(5));

// in arrow function if we have only return statement in body of function then
const square1 = num => num * num;
console.log(square1(6));
// application with array

const numbers = [1, 2, 3, 4, 5];
let sq = numbers.map(function (num) { return num * num; });
console.log(sq);

let sq1 = numbers.map(num => num * num);
console.log(sq1);


