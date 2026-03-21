let first = 56;


let outer = (outerArg) => {
  const outerconst = 3.14;
  let inner = (innerArg) => {
    const innerconst = 34;
    console.log(`first: ${first}`);
    console.log(`outerArg: ${outerArg}`);
    console.log(`outerconst: ${outerconst}`);
    console.log(`innerArg:${innerArg}`);
    console.log(`innerconst: ${innerconst}`);
  }
  console.log(`outer first: ${first}`);
  console.log(`outerArg : ${outerArg}`);
  console.log(`outer const: ${outerconst}`);
  return inner;
}

let inner = outer(45);
inner(55);
