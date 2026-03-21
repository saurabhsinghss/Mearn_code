console.log('Checking Callback Hell');


function getDataFromInterent(successCallback) {
  console.log('Getting data from internet');
  setTimeout(() => {
    successCallback('kg coding');
  }, 2800);
}


function setDataToDB(successCallback) {
  console.log('sending data to DB');
  setTimeout(() => {
    successCallback('db_row_25');
  }, 2000);
}


function sendResponsetoUser(successCallback) {
  console.log('sending response to user');
  setTimeout(() => {
    successCallback();
  }, 2800);
}

getDataFromInterent((data) => {
  console.log(`Data is fetched ${data}`);
  setDataToDB((id) => {
    console.log(`data is saved in DB with id: ${id}`);
    sendResponsetoUser(() => {
      console.log('response is send to user');
    })
  })
});