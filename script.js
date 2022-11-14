'use strict';
let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore=0;
const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
};
const displayNumber= function(number){
  document.querySelector('.number').textContent=number;
};
const displayScore= function(score){
  document.querySelector('.score').textContent=score;
};
// check functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    displayMessage ('⛔️ No Number!');
    // when player wins
  } else if (guess === SecretNumber) {
    displayMessage ('🎉 Correct Number !');
    displayNumber(SecretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }if(score>highscore){
      highscore=score
      document.querySelector('.highscore').textContent=highscore;
     // when guess is wrong
    }else if(guess!==SecretNumber){
    if (score > 1) {
    displayMessage (guess > SecretNumber ? '📈 Too high':'📉 Too low');
    score--;
   displayScore(score);
  } else {
    displayMessage('💥 You lost the game');
    displayScore(0) 
  };
};
});
// Play-again Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value= '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; 
});



