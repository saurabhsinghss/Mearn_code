// console.log('Multiplication table:');


// let num = prompt("Enter the number for which you want to generate the multiplication table:");
// let i = 1;
// while (i <= 10) {
//   console.log(`${num} X ${i} = ${num * i}`);
//   i++;
// }


// sum of all odd number upto N

// console.log('Sum of all the odd number upto N:');
// let N = prompt('Enter the number N upto which you want to calculate the sum of odd number:');
// let i = 1;
// let sum = 0;
// while (i <= N) {
//   if(i%2 == 1)sum += i;
//   i++;
// }
// console.log(`sum of all the odd number upto ${N}:${sum}`);

// factorial calculation
// console.log('calculationg factorial of give number:');
// let num = 10, temp = num;
// let fact = 1;
// while (num >=1) {
//   fact *= num;
//   num--;
// }
// console.log(`Factorial of ${temp}:${fact}`);

// reversing the number using for loop
// let result = 0;
// for (let num = 3487; num > 0;num = Math.floor(num/10)){
//   let rm = num % 10;
//   result = result * 10 + rm;
// }
// console.log('reverse is:', result);

// checking prime or not

let num = prompt("Enter the number which you want to check for prime:");
let count = 0;
for (let i = 2; i < num; i++){
  if (num % i === 0) {
    count++;
    break;
  }
}
if (count === 0) {
  console.log(`${num} is prime number`);
}
else {
  console.log(`${num} is not a prime number`);
}