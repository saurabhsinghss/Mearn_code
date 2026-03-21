let student1 = {
  name: 'Ram',
  age: 17,
  course: 'IT',
  roll:1,
}

let student2 = {
  name: 'Shyam',
  age: 18,
  course: 'CSE',
  roll:2,
}

// creating student3 using constructor
function Student(name , age,course,roll) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.roll = roll;

  this.printName = function () {
    console.log(this.name);
  }
}

Student.prototype.changeCourse = function () {
  this.course = 'ECE';
}


let student3 = new Student('saurabh', 20, 'CSE', 25);
console.log(student1);
console.log(student2);
console.log(student3);


student3.printName();

student3.changeCourse();// changeCourse function is added to constructor Student using prototype
console.log(student3);
