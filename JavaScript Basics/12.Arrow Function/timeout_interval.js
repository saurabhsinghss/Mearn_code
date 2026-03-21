(() => {
  let counter = 0;
  let increment = (head) => console.log(head,++counter);
  console.log('start');
  increment('first');

  // setTimeout(increment, 2000);// this will call increment function after 2 second but code is not stop for 2 sec here it will execute nexline of code and when 2 second completed then this will execute.
  let timerId = setTimeout(() => increment('timer'), 5000);
  console.log('timerId', timerId);
  setTimeout(() => { clearTimeout(timerId) }, 1000);

  console.log('end');
}

)();