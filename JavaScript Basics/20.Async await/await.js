function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}

// here instead of using .then we uses await
async function getUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let json = await response.json();
    console.log(json);
  } catch (error) {// when promise rejected with reason.
    console.log(error);
  }
}

getUsers();

  
