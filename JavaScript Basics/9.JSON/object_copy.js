let obj = {
  a: 45,
  b: 65,
  c:'Hello',
};

console.log(obj);
let objCopy = copyMyObject(obj);
objCopy.a = 111;
console.log(obj);

function copyMyObject(obj) {
  // let obj2 = obj;// this is just reference copy.
  // return obj2;

  // 1. JSON stringigy
  let obj_str = JSON.stringify(obj);
  let obj2 = JSON.parse(obj_str);
  return obj2;
}