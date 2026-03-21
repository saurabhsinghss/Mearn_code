console.log('Using local storage');
// localStorage.setItem('name', 'saurabh');

let user = {
  firstName: 'Saurabh',
  lastName: 'Singh',
  age: 20,
  email: 'aroma@singh.com',
  hobbies: ['music', 'coding'],
};
localStorage.setItem('userdata', JSON.stringify(user));


let userdatainfo = localStorage.getItem('userdata');
console.log(userdatainfo);
let userJson = JSON.parse(userdatainfo);
console.log(userJson);


user.age++;
localStorage.setItem('userdata', JSON.stringify(user));
console.log(localStorage.getItem('userdata'))