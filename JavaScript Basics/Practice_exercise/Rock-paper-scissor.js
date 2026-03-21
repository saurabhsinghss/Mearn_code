let randomChoice;
let score = {// object created for score maintainence
  computer: 0,
  user: 0,
  tie: 0,
  total:0,
};

function initialize() {
  let scorefetch = retrieve();
  if (scorefetch) {
    score.computer = scorefetch.computer;
    score.tie = scorefetch.tie;
    score.user = scorefetch.user;
    score.total = scorefetch.total;
  }
  else {
    save();
  }
  display();
}

function save() {
  localStorage.setItem('scorecard', JSON.stringify(score));
}

function retrieve() {
  let scoreString = localStorage.getItem('scorecard');
  return JSON.parse(scoreString);
}

function assignRandomChoice() {
   randomChoice = Math.floor(Math.random() *3 +1);
}
function rockClicked() {
 
  score.total++;
  assignRandomChoice();
  let computerChoiceText;
  let result;
  if(randomChoice ===1){
    computerChoiceText = '👊Rock';
    result = 'Game Tie';
    score.tie++;
    save();
  }
  else if(randomChoice ===2){
    computerChoiceText = '✋Paper';
    result = 'Computer won ';
    score.computer++;
    save();
  }
  else{
    computerChoiceText = '✌️ Scissors';
    result = 'You won';
    score.user++;
    save();
  }
  document.querySelector('.result').innerHTML = `Your choose 👊Rock .<br> Computer chose ${computerChoiceText}.<br> Result:${result}`;
display();
}

function paperClicked() {
  score.total++;
  assignRandomChoice();
  let result;
  let computerChoiceText;
  if(randomChoice ===1){
    computerChoiceText = '👊Rock';
    result = 'You Won';
    score.user++;
    save();
  }
  else if(randomChoice ===2){
    computerChoiceText = '✋Paper';
    result = 'Game Tie';
    score.tie++;
    save();
  }
  else{
    computerChoiceText = '✌️ Scissors';
    result = 'Computer won';
    score.computer++;
    save();
  }
  document.querySelector('.result').innerHTML = `You choose ✋Paper. <br> Computer chose ${computerChoiceText}.<br> Result:${result}`;
  display();
}


function scissorClicked() {
  score.total++;
  assignRandomChoice();
  let computerChoiceText;
  let result;
  if(randomChoice ===1){
    computerChoiceText = '👊Rock';
    result = 'Computer won';
    score.computer++;
    save();
  }
  else if(randomChoice ===2){
    computerChoiceText = '✋Paper';
    result = 'You won';
    score.user++;
    save();
  }
  else{
    computerChoiceText = '✌️ Scissors';
    result = 'Game Tie';
    score.tie++;
    save();
  }
  document.querySelector('.result').innerHTML = `Your choose ✌️ Scissors. <br> Computer chose ${computerChoiceText}.<br>Result: ${result}`;
  display();
}


function reset() {
  score.computer = 0;
  score.tie = 0;
  score.user = 0;
  score.total = 0;
  save();
  display();
}

function display() {
  document.querySelector('#score').innerHTML = `Score: ComputerWon:${score.computer},UserWon:${score.user},Tie:${score.tie} <br> Total Game Played:${score.total}`;
}

initialize();