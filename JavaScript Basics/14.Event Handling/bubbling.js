let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');

outer.addEventListener('click', () => {// by using the true in parent it reverse the order of execution that is called the capturing.
  console.log("outer");
},true);
inner.addEventListener('click', (event) => {
  console.log('inner');
  event.stopPropagation();
});