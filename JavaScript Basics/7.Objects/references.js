let a = { value: 10, };
let b = a;

console.log(`a:${a.value} and b:${b.value}`);
a.value = 15;
console.log(`a:${a.value} and b:${b.value}`);