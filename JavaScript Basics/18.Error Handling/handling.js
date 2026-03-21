let parseStringToJson = (jsonString) => {
  return JSON.parse(jsonString);
}

let obj = {
  a: 1,
  b: 2,
  x:3,
}

let objString = JSON.stringify(obj);
//console.log(objString);
let newObj = parseStringToJson(objString);
console.log(newObj);

// let newObj2 = parseStringToJson('{"A":1}');

// error handling using try and catch block
let newObj2;
try {
newObj2 = parseStringToJson("{'A':1}");
}
catch (error) {
  console.log("Error occured");
  console.log(error);
  
}
console.log(newObj2);
console.log("End....");// this line will execute only if there is no error in try block or if there is any error in try block and if it is catch then in that case this line aslo execute. otherwise if error occured and it is not catch then code stop there and this line of code will not execute.
