function hello() {
  return 'Hello world';
}

let str = hello();
console.log(str);
console.log(typeof str);

// without async
function namaste() {
  return new Promise((resolve,reject) => {
    resolve('Namste');
  })
}
let str3 = namaste();
console.log(str3);
str3.then(data => console.log(data));

// with async function.
async function ola() {
  return 'ola mundo';
}
let str2 = ola();
console.log(str2);
console.log(typeof str2);