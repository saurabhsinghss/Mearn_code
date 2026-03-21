function divide(a, b) {
  if (b === 0) {
    let error = new Error('Divide by zero');
    throw error;
  }
  return a / b;
}

console.log(divide(4, 2));
try {
  console.log(divide(4, 0));
} catch (error) {
  console.log('Error occured');
  console.log(error.message);
}

console.log(divide(6, 4));