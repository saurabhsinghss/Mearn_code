console.log("event handling");
let clickHandler = () => {
  console.log('Button clicked');
}

function handleButtonClick() {
  for (let i = 0; i < 5; i++){
    console.log(i);
  }
}

let button = document.getElementById("my_button");
// using event handler .

// button.onclick = clickHandler;
// button.onclick = handleButtonClick;

// But there is problem for above event handler that is we can apply only one event handler at a time. so to sort out this we use even listeners

// using event listener .(Note one thing that if i add same event listener two time then it will consider it only one time not two time for the same event.)
button.addEventListener('click', clickHandler);
button.addEventListener('click', handleButtonClick);

