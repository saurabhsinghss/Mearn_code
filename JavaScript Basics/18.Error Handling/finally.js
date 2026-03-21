function jsonStringToJson(str) {
  try {
    console.log('Inside try block');
    return JSON.parse(str);
  } catch (error) {
    console.log('Error occured');
    console.log(error.message);
    return {};
  } finally{
    console.log('Finally'); 
  }
}

let newobj2 = jsonStringToJson('{"A":1}');
console.log('newobj2', newobj2);
