console.log('Learning object equality....');
let obj1 = { a: 1 };

let obj2 = { a: 1 };
let obj3 = obj1;

console.log(obj1 == obj2);// false
console.log(obj1 === obj2);// false

console.log(obj1 === obj3);// true
console.log(obj1 == obj3);// true


// creating two object student and student 1
let student = {
  firstName: 'saurabh',
  lastName: 'singh',
  age: 20,
  address: {
    houseNo: 50,
    road: 'MG road',
    city: 'jaunpur',
    state: 'uttarpradesh',
  },
  subject: ['Maths', 'Hindi', 'English'],
  feePaid: true,
};

let student1 = {
  firstName: 'Ram',
  lastName: 'Yadav',
  age: 26,
  address: {
    houseNo: 55,
    road: 'Abdul kalam road',
    city: 'varansi',
    state: 'uttarpradesh',
  },
  subject: ['Maths', 'Hindi', 'English'],
  feePaid: false,

};



console.log(JSON.stringify(student1))
console.log(Object.keys(student));

// now we are going to learn about shallow comparison and deep comparison
// 1.deep comparison
function deepEqula(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;


  for (let key of keys1) {
    if (!keys2.includes(key) ||!deepEqula(obj1[key],obj2[key])) {// checking value and nested object also.
      return  false;
    }
  }
  return true;
}

console.log(deepEqula(student, student1));// false

const objD = { a: 1, b: { c: 4 } };
const objE = { a: 1, b: { c: 4 } };
const objF = { a: 1, b: { c: 5 } };

console.log(deepEqula(objD, objE));
console.log(deepEqula(objD, objF));





