// function getDataFromInterent(successCallback) {
//   console.log('Getting data from internet');
//   successCallback('kg coding');
// }

// getDataFromInterent((data) => {
//   console.log(`Data is fetched ${data}`);
// });

function getDataFromInternetUsingPromise() {
  let promise = new Promise((resolve, reject) => {
    console.log('Getting data from internet using Promise');
    for (let i = 0; i < 10; i++) console.log(i);
    //resolve('Kg coding');
    reject('Internet timeout')
  });
  return promise;// object
}

// this shows how to use promise
getDataFromInternetUsingPromise().then((data) => {
  console.log(`Data is feched ${data}`);
})
  .catch((error) => {
    console.log(`Error: ${error}`);
  })
  .finally(() => {
    console.log('finally block');
})