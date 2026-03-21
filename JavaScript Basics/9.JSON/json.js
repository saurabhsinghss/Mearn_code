let user = {
  firstName: 'Saurabh',
  lastName: 'Singh',
  age: 20,
  email: 'aroma@singh.com',
  hobbies: ['music', 'coding'],
};


console.log(user);
let userstring = JSON.stringify(user);
console.log(userstring);

// console.log(typeof userJson);
let userJson = JSON.parse(userstring);
console.log(userJson);