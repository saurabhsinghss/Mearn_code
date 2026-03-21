function greet(name) {
  console.log('Hello ' + name);
}

function capitalize(name) {
  let upper = name.toUpperCase();
  console.log(upper);
}

//call back

function processUser(process) {
  let studentName = prompt('Enter your Name:');
  process(studentName);
}

// processUser(greet);
// processUser(capitalize);