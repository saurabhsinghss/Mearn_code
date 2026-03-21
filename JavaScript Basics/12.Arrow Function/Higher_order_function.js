//function that return a function
const createDouble = () => {
  function double(num) {
    return num * 2;
  }
  return double;
}


const Double = createDouble();
console.log(Double(5));


//as we know createDouble is returning a function so we can call it like this
console.log(createDouble()(6));

