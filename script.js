'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log(num);
let highScore=0;

const getMessage=function (message){
  document.querySelector('.message').textContent=message;
}

const getScore=function(tempscore){
  document.querySelector('.score').textContent=tempscore;
}

const getNumber=function(num){
  document.querySelector('.number').textContent=num;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    getMessage('No number !');
  }
  else if (guess === num) {
    getMessage('Correct Number')
    document.querySelector('body').style.backgroundColor='#60b347';
    getNumber(num);
    document.querySelector('.number').style.width='30rem';
    if(highScore<score){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
  } 
  else if (guess !== num) {
    if (score > 1) {
      guess>num?getMessage('Too high'):getMessage('Too low');
      score--;
      getScore(score);
    } else {
      getMessage('You lost the game');
      getScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function ()
{
  score=20;
  num = Math.trunc(Math.random() * 20) + 1;
  console.log(num);
  getMessage('Start guessing...');
  getScore(score);
  document.querySelector('body').style.backgroundColor='#222';
  getNumber('?');
  document.querySelector('.number').style.width='15rem';
});
