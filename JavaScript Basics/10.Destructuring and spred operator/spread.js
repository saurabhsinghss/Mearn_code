let obj = {
  a: 45,
  x: 98,
  hello: 'world',
};

let even = [2, 4, 6, 8];
console.log('even:', even);

let newEven = [...even];// shallow copy using spread operator
newEven.push(12);
console.log('even', even);
console.log('Neweven:', newEven);

let obj_copy = { ...obj };
obj_copy.result = 10;
console.log('copy:', obj_copy);
console.log('not copy:', obj);

 
