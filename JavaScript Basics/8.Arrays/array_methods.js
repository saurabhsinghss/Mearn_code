console.log("learning different method of array:");
let arr = [12, 1, 4, 5, 7];

console.log('isArray:', Array.isArray(arr));
arr.sort();
console.log(arr);

// advance function of array

let arr1 = [1, 2, 4, 5];
// function square(item) {
//   return item * item;
// }

console.log('original array:', arr1);
let newArr = arr1.map(function (item) {
  return item * item;
});

console.log('square:', newArr);